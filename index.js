const express = require('express');

const db= require('./config/mongoose');
const passport= require('passposrt');
const passportJwt= require('./config/passportJWTstrategy');
const PORT = 8000;
const app= express();
const morgan= require('morgan');

app.use(express.json());

app.use(morgan('tiny'));

app.use('/', require('./routes'));
app.listen(PORT, function(error){
    if(error) console.log('error: ',error);
    console.log("Server is running...");
});


app.use(passport.initialize());