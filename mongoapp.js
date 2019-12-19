const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = new express();
const mongoClient = new MongoClient('mongodb://localhost:27017', {useNewUrlParser:true});

let dbClient;

mongoClient.connect((err, client)=>{
    if (err) return console.log(err);
    dbClient = client;
    app.locas.collection = client.db('usersdb').collection('users');
    app.listen(3000, ()=>console.log('Сервер запущенн'));
});

process.on('SIGINT', ()=>{
    dbClient.close();
    process.exit();
});