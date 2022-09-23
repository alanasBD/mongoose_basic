const mongoose = require('mongoose');
const colors = require('colors');
const app = require('./app');
require('dotenv').config();
const PORT = 8080

mongoose
.connect('mongodb://localhost:27017/tools')
.then(()=>{
    console.log("Connected"); 
});

app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`.red);
})