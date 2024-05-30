const express = require('express');
const routers = express.Router();
const classController = require('../controllers/ClassController.js');

// Tag

routers.post('/class', classController.createClass)

// exports = module.exports = routers;


exports = module.exports = routers;