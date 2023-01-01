//const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //"X" też zadziała

const app = express();

const usersRoutes = require('./routes/users') //import zawartości z pliku

//dotnet.userconfig();


//MIDLEWARES
app.use(bodyParser.json()); //zapisuje body do jsona nie wazne co sie stanie, co wykonamy
app.use('/users', usersRoutes); //proxy, który mówi co może używać user 




//ROUTE
app.get('/',(req, res)=> {
    res.send('Hallo World!');
});

//DB
//mongoose.connect('mongodb+srv://lordanayami:<matrix0892>@cluster0.7itjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
//console.log('connected to db');
//});

//DB
mongoose.connect('mongodb+srv://lordanayami:<HASLO>@cluster0.7itjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
console.log('connected to db');
});



app.get('/pogoda',(req, res)=> {
    res.send('Dziś jest słonecznie.');
    });


//SERVER
app.listen(3000);

