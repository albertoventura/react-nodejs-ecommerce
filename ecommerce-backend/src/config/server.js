const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require("cors");

const path = require('../constant/path');

const productRouter = require("../app/routers/product.router");

const app = express();
app.use(cors());
require("../app/database/db");

app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));
app.use(bodyParser.json({limit: '10mb'}));

app.use(path.product.root, productRouter);

module.exports = app;