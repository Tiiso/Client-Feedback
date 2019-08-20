const express = require('express');
const app = express(); // generates app

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});

//Deployment 
const PORT = process.env.PORT || 5000;
app.listen(PORT);

