const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const adminData = require('./administration');
const wishescontroller = require('../controllers/wishes');
const router = express.Router();

router.get('/', wishescontroller.getWishes);


module.exports = router;