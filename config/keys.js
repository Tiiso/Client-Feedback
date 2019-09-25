if (process.env.NODE_ENV === 'production') {
    // we are in prod - return the prod set
    module.exports = require('./prod');
} else {
    // we are in development -return dev keys!!!
    module.exports = require('./dev');
}