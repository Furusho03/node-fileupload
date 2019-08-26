const express = require('express');
const route = express.Router()

const indexController = require('../controller/indexController');

route.get('/', indexController.Index)

route.get('/post', indexController.Post)

route.post('/post', indexController.Posted)

module.exports = route;