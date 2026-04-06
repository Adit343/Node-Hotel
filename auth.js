const passport = require("passport");
const LocalStratergy = require("passport-local").Strategy;



passport.use(
  new LocalStratergy(async (USERNAME, password, done) => {
    try {
      console.log("User Credentials:", USERNAME, password);
      const user = await Person.findOne({ username: USERNAME });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      if (user.password === password) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password." });
      }
    } catch (error) {
      return done(error);
    }
  }),
);

module.exports = passport;