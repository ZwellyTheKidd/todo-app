var express = require('express');
var Mongoclient = require('mongodb').MongoClient;
var cors=require('cors');
const multert = require('multer');

var app = express();
app.use(cors());

var CONNECTION_STRING = 'mongodb+srv://zwellydeveloper:zwelly45@cluster0.cnp7hel.mongodb.net/?retryWrites=true&w=majority';


var DATABASENAME = 'todoappdb';
var database;
var collection = database.collection("todoappcollection");

app.listen(5038,() => {
    Mongoclient.connect(CONNECTION_STRING,(error,client)=> {
        database=client.db(DATABASENAME);
        console.log("connection to the database successful");
    })
});

app.get('/api/todoapp/GetNotes',(request,response) => {
    collection.find({}).toArray((error,result)=>{
        response.send(result);
    })
});
 
app.post('/api/todoapp/AddNotes',multer().none(),(request,response)=>{
    collection.count({},function (error,numOfDocs) {
        collection.insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("Added successfully");
    })
});

app.delete('/api/todoapp/DeleteNotes',(request,response)=>{
    collection.deleteOne({
        id:request.query.id
    })
    response.json("Delete successfully");
});











