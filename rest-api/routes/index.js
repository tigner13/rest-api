var express = require('express');
var router = express.Router();
var api = require('./api');
/* GET home page. */

/*Calls to restaurants Data Base*/
router.get('/restaurants', api.getRestaurants);
router.post('/restaurants', api.postRestaurant);
router.put('/restaurants', api.putRestaurant);
router.delete('/restaurants', api.deleteRestaurant);

/*calls for meues database*/
router.get('/menus', api.getMenus);
router.post('/menus', api.postMenu);
router.put('/menus', api.putMenu);
router.delete('/menus', api.deleteMenu);

/*calls for menu items database*/
router.get('/menu_items', api.getMenuItems);
router.post('/menu_items', api.postMenuItem);
router.put('/menu_items', api.putMenuItem);
router.delete('/menu_items', api.deleteMenuItem);


module.exports = router;
