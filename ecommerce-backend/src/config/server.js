const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require("cors");

const path = require('../constant/path');
//const authMiddleware = require("../app/middlewares/auth.middleware");

/* const userRouter = require('../app/routers/user.router');
const loginRouter = require("../app/routers/login.router");
const signRouter = require("../app/routers/signup.router");
const marketRouter = require("../app/routers/market.router");
const productRouter = require("../app/routers/product.router");
const priceRouter = require("../app/routers/price.router");
const shopListRouter = require("../app/routers/shopList.router"); */
const productRouter = require("../app/routers/product.router");

const app = express();
app.use(cors());
require("../app/database/db");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(path.product.root, productRouter);

module.exports = app;