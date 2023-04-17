const route = require('express').Router();
module.exports = route;

const controller = require('../controller/controller')

router.get('/', controller.getIndex);