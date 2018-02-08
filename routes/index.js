var express = require('express');
var router = express.Router();

/* Abstraction of routes */

/******* GET *******/
var get = require('./get');
// Array of all restaurants (skinny)
router.get('/restaurant', get.getAll);
// Restaurant (fat)
router.get('/restaurant/:id', get.getOne);
// Menu
router.get('/restaurant/:id/menu/:type', get.getMenu);


/******* ADD (POST) *******/
var add = require('./add');
// Restaurant
router.post('/restaurant', add.addRestaurant);
// Menu
router.post('/restaurant/:id/menu', add.addMenu);
// Menu Item
router.post('/restaurant/:id/menu/:type', add.addMenuItem);


/************* UPDATE (PUT)*************/
var update = require('./update');
// Restaurant
router.put('/restaurant/:id', update.updateRestaurant);


/******* DELETE *******/
var deleteAPI = require('./delete');
// Restaurant
router.delete('/restaurant/:id', deleteAPI.deleteRestaurant);
// Menu
router.delete('/restaurant/:id/menu/:type', deleteAPI.deleteMenu);
// Menu Item
router.delete('/restaurant/:id/menu/:type/:itemId', deleteAPI.deleteMenuItem);


module.exports = router;
