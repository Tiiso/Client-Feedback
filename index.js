const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express(); // generates app

require('./routes/authRoutes')(app);

//Deployment 
const PORT = process.env.PORT || 5000;
app.listen(PORT);

