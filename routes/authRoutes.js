const passport = require('passport');

module.exports = (app) => {
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
}
