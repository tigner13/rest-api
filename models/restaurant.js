const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;
const config      = require('../config');

const restaurantSchema = new Schema({
  name: String,
  address: String,
  genre: String,
  phoneNumber: String,
  url: String,
  menus: [{
    name: String,
    menuType: String,
    items: [{
      name: String,
      cost: Number,
      category: String
    }]
  }]
});

mongoose.connect(config.mongodbUrl);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
exports.Restaurant = Restaurant;
