const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;

const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
const JWT_SECRET = 'secret';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}
passport.use(new JWTstrategy(
    options,
    (jwtPayload, done) => {
       try {
           const user = await User.findByPk(jwtPayload.id);
           if(user){
               return done(null, user);
           }
           else{
            return done(null, false); 
           }
       }  catch(error){
           console.log('Error finding the user JWT', error);
           return done(null, false);
       }
    }
));

module.exports = passport;