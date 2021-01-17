require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({
        Info: 'basic api to use as example to run automated tests using postman - Software\'s tests UFS 2020.1',
        Port: `APP running on port ${port}.`
    });
});

require('./app/controller/basic')(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});