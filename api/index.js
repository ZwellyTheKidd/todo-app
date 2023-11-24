var express = require('express');
var Mongoclient = require('mongodb').MongoClient;
var cors=require('cors');
const multert = require('multer');

var app = express();
app.use(cors());

var CONNECTION_STRING = 'mongodb+srv://zwellydeveloper:zwelly45@cluster0.cnp7hel.mongodb.net/?retryWrites=true&w=majority';


var DATABASENAME = 'todoappdb';
var database;

app.listen(5038,() => {
    Mongoclient.connect(CONNECTION_STRING,(error,client)=> {
        database=client.db(DATABASENAME);
        console.log("connection successful");
    })
});










