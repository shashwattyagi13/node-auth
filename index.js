const express = require('express');

const PORT = 5500;
const app= express();

app.use('/', require('./routes'));
app.listen(PORT, function(error){
    if(error) console.log('error: ',error);
    console.log("Server is running...");
});