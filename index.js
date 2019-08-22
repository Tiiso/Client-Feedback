const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys.js');
const app = express(); // generates app
//688963742743-us6tnguo3j93js9jtmaa3hrdrrj28asc.apps.googleusercontent.com
//secret aEI9BdYQ-jkyGhpA_WzUGcuH
passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('access token',accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    }
  )
);

// route handler 
app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
    })
);

// 2nd route handler
app.get(
    '/auth/google/callback', 
    passport.authenticate('google')
);

//Deployment 
const PORT = process.env.PORT || 5000;
app.listen(PORT);

