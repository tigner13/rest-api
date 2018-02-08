const config          = require('../config.js');
const mongoose        = require('mongoose');
const RestaurantModel = require('../models/restaurant.js').Restaurant;
mongoose.connect(config.mongodbUrl);

// Update Restaurant
let updateRestaurant = function(req, res) {
  RestaurantModel.update({_id: req.params.id}, req.body, function(err, numImpacted) {
    if (err || numImpacted === 0) {
      res.json({success: false, err: err.message, numImpacted: numImpacted});
      return;
    }

    res.json({success: true});
  })
};


var funcs = { updateRestaurant }

module.exports = funcs;
