const config          = require('../config.js');
const mongoose        = require('mongoose');
const RestaurantModel = require('../models/restaurant.js').Restaurant;
mongoose.connect(config.mongodbUrl);

let deleteRestaurant = function(req, res) {
  RestaurantModel.findById(req.params.id).remove(function(err) {
    if (err) {
      res.json({success: false, err: err.message});
      return;
    }

    res.json({success: true});
  })
};

let deleteMenu = function(req, res) {
  RestaurantModel.findByIdAndUpdate(req.params.id, {
    '$pull' : {
      'menus' : { 'menuType' : req.params.type }
    }
  }, function(err) {
    if (err) {
      res.json({success: false, err: err.message});
      return;
    }

    res.json({success: true});
  });
};

let deleteMenuItem = function(req, res) {
  RestaurantModel.findById(req.params.id, function(err, restaurant) {
    if (!restaurant) {
      res.json({success: false, err: 'no restaurant'});
      return;
    }
    let menu = restaurant.menus.filter(function(menu) {
      return menu.menuType === req.params.type;
    });

    let newItems = menu[0].items.filter(function(item) {
      return item._id.toString() !== req.params.itemId
    })

    menu[0].items = newItems;

    for (let i = 0; i < restaurant.menus.length; i++) {
      if (restaurant.menus[i].type === req.params.type) {
        restaurant.menus[i] = menu[0];
      }
    }


    restaurant.save(function(err) {
      if (err) {
        res.json({success: false, err: err.message});
        return;
      }

      res.json({success: true});
    })

  });
};


var funcs = { deleteRestaurant,
              deleteMenu,
              deleteMenuItem }

module.exports = funcs;
