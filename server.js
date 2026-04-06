const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/Person");
const passport = require('./auth.js')
// const passport = require("passport");

// const passport = require('./auth.js')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.get("/idli", (req, res) => {
//   var customized_idli = {
//     name: "abc",
//     size: 12,
//     is_chutney: true,
//     tamil_elle: false,
//   };

//   res.send(customized_idli);
// });
app.get("/", (req, res) => {
  res.send("Hello World!, How are you World?");
});
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to:${req.originalUrl}`,
  );
  next();
};

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false })
const personRoutes = require("./routes/personRoutes.js");
app.use("/person",localAuthMiddleware, personRoutes);

const menuRoutes = require("./routes/menuRoutes.js");
app.use("/menuitem", menuRoutes);
app.listen(3000);
