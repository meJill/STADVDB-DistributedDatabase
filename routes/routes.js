const route = require('express').Router();
module.exports = route;

const controller = require('../controller/controller')

route.get('/', controller.getIndex);
route.get('/insert', controller.getInsert);
route.get('/view', controller.getView);
route.get('/delete', controller.getDelete);
route.get('/update', controller.getUpdate);