const express = require('express');

const app = express();


app.set('view engine', 'ejs');

app.use('/', (req, res) => {
    res.render('contact', {
        title: 'Контакты',
        phone: '8-800-200-600',
        emails: ['set@mail.ru', 'info@gmail.com']
    });
});

app.listen(3000);
