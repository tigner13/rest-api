const config          = require('../config.js');
const mongoose        = require('mongoose');
const RestaurantModel = require('../models/restaurant.js').Restaurant;
mongoose.connect(config.mongodbUrl);

// Gets array of skinny restaurants
let getAll = function(req, res) {
  RestaurantModel.find({}, 'name _id menus.name', function(err, restaurants) {
    if (err) {
      res.json({success: false, err: err.message});
      return;
    }

    res.json(restaurants);
  });
};

// Gets fat restaurant
let getOne = function(req, res) {
  RestaurantModel.findById(req.params.id, function(err, restaurant) {
    res.json({restaurant: restaurant});
  })
};

// Get menu of one restaurant
let getMenu = function(req, res) {
  RestaurantModel.findById(req.params.id, function(err, restaurant) {
    if (err) {
      res.json({success: false, err: err.message});
      return;
    }

    let menu = restaurant.menus.filter(function(menu) {
      return menu.menuType === req.params.type;
    })

    if (menu.length === 0) {
      res.json({success: false, err: 'No menu found'});
      return;
    }

    res.json({success: true, menu: menu});
  })
};


var funcs = { getAll,
              getOne,
              getMenu }

module.exports = funcs;
