const config          = require('../config.js');
const mongoose        = require('mongoose');
const RestaurantModel = require('../models/restaurant.js').Restaurant;
mongoose.connect(config.mongodbUrl);

// Add a restaurant
let addRestaurant = function(req, res) {
  let newRestaurant = new RestaurantModel({
    name: req.body.name || '',
    address: req.body.address || '',
    genre: req.body.genre || '',
    url: req.body.url || ''
  });

  newRestaurant.save(function(err) {
    if (err) {
      res.json({success: false, err: err.message});
    } else {
      res.json({success: true, id: newRestaurant._id});
    }
  });
};

// Add a menu
let addMenu = function(req, res) {
  console.log(req.params.id);
  let menu = {name: req.body.name || '', menuType: req.body.menuType || ''};

  RestaurantModel.update({_id: req.params.id}, { $push: {
    menus: menu
  } }, function(err) {
    if (err) {
      res.json({success: false, err: err.message})
    } else {
      res.json({success: true});
    }
  })
};

// Add a menu item
let addMenuItem = function(req, res) {
  console.log(req.params.id);
  console.log("poop");

  let item = {name: req.body.name || '', cost: req.body.cost || ''};
  RestaurantModel.update({_id: req.params.id, "menus.menuType": req.params.type}, { $push: {
    "menus.$.items": item
  } }, function(err) {
    if (err) {
      res.json({success: false, err: err.message})
    } else {
      res.json({success: true});
    }
  })
};

var funcs = { addRestaurant,
              addMenu,
              addMenuItem }

module.exports = funcs;
