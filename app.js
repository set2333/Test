const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    title: String,
    body: String
});
const Page = mongoose.model('Page', pageSchema);

app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost:27017/usersdb', {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err) return console.log(err);
    app.listen(3000, ()=>{
        console.log('Сервер работает...');
    });
});

app.get('/', (req, res)=>{
    Page.findOne({title:'Главная'}, (err, page)=>{
        if(err) {
            console.log(err);
            res.sendStatus(404);
        } else{
            res.render('index', page);
        }
    })
});

app.get('/about', (req, res)=>{
    Page.findOne({title:'О сайте'}, (err, page)=>{
        if (err){
            console.log(err);
            res.sendStatus(404);
        } else {
            res.render('index', page);
        }
    })
})

//mongoose.connect('mongodb://localhost:27017/usersdb', {useNewUrlParser:true, useUnifiedTopology:true});
//const Page = mongoose.model('Page', pageSchema);
//const page = new Page({
//    title:'Главная',
//    body:'<h1>Главная страница</h1>'
//});
//
//page.save((err)=>{
//    mongoose.disconnect();
//    if (err) return console.log(err);
//    console.log('Сохранен объект ', page);
//})