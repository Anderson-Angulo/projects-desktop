const JwtStrategy =require('passport-jwt').Strategy,
      ExtractJwt=require('passport-jwt').ExtractJwt
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport=require('passport')

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

const User=require('./models/User')
const GOOGLE_CLIENT_ID="1762831242-t66bs4m2gcfv54rqr9uac7f6vb6jp0bj.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

module.exports=(passport)=>{
  const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey:'secretPassword'
  }
  passport.use(new JwtStrategy(opts,(decoded,done)=>{
    console.log('decoded jwt',decoded)
    return done(null,decoded)
  }))



  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3050/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOneAndUpdate(
      { googleId: profile.id,username:profile.name.givenName },
      { $setOnInsert: { googleId: profile.id,username:profile.name.givenName }},
      { new: true, upsert: true },
      function (err, user) {
          return done(err, user);
      }
    );
  }
));


}

