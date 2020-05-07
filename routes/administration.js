const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const wishescontroller = require('../controllers/wishes');
const router = express.Router();
//const products = [];


router.get('/add-wish', wishescontroller.getAddWishPage);

router.post('/add-wish', wishescontroller.postWishes);

module.exports = router;
//exports.router = router;
//exports.products = products;