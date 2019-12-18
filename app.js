const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const func = require('./func');

const app = express();
const jsonParser = bodyParser.json();
app.use(express.static(__dirname + '/public'));
app.get('/api/getAll', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/api/addPrice', jsonParser, (req, res) => {
    if (!req.body) {
        res.sendStatus(400);
    }
    fs.readFile('data.json', 'utf8', (err, data) => {
        let prises = JSON.parse(data);
        let newPrice = {
            id: prises.reduce((pre, item) => {
                if (item.id > pre) {
                    return item.id;
                }
                return pre;
            }, 0) + 1,
            name: req.body.name,
            price: req.body.price
        }
        prises.push(newPrice);
        if (!func.isUndefToObj(prises[prises.length-1])) {
            fs.writeFile('data.json', JSON.stringify(prises), () => {
                res.send(JSON.stringify(newPrice));
            });
        }
        else {
            res.sendStatus(400);
        }

    });
});

app.listen(3000);
