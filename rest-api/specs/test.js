const mongoose = require("mongoose");
const RestaurantModel = require('../models/restaurant.js').Restaurant;
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Restaurants', () => {

  let restaurant = {
    name: 'McDonalds',
    address: '123 Main St',
    genre: 'Fast Food',
    phoneNumber: '555-555-5555',
    url: 'https://mcdonalds.com'
  }

  beforeEach((done) => {
    RestaurantModel.remove({}, (err) => {
      done();
    });
  });

  describe('POST /restaurants', () => {
    it('it should POST all a new restaurant', (done) => {
      chai.request(server)
      .post('/restaurant')
      .send(restaurant)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eq(true);
        done();
      });
    });
  });

  describe('GET /restaurants', () => {
    it('it should GET all the restaurants', (done) => {
      chai.request(server)
      .get('/restaurant')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });
});
