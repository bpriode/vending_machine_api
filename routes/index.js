const express  = require('express');
const Vending  = require('../models/vending')
const Purchase  = require('../models/purchase')
const mongoose  = require('mongoose');
const router   = express.Router();

mongoose.connect('mongodb://localhost:27017/vending');

router.get('/', function(req, res) {
  res.send('Here is my Vending Machine API')
})

// get a list of items
router.get('/api/customer/items', function(req, res) {
  Vending.find({})
  .then(function(data){
  res.send(data)
}).catch(function(err) {
  res.send('Vending Machine is Empty')
})
});

// purchase an item
router.post('/api/customer/items/:itemId/purchases', function(req, res) {
  Purchase.create({
    moneySpent: req.body.moneySpent,
  })
  .then(function(data) {
    res.send(data)
  })
  .catch(function(err) {
    res.send('Item was not Purchased')
  })
});


// get a list of all purchases with their item and date/time
// router.get('/api/vendor/purchases')
//


// get a total amount of money accepted by the machine
// router.get('/api/vendor/items')
//


// add a new item not previously existing in the machine
router.post('/api/vendor/items', function(req, res) {
  Vending.create({
    description: req.body.description,
    cost: req.body.cost,
    quantity: req.body.quantity
  })
  .then(function(data) {
    res.send(data)
  })
  .catch(function(err) {
    res.send('Item was not added')
  });
});

//
// update item quantity, description, and cost
router.patch('/api/vendor/items/:itemId', function(req, res) {

  Vending.update({_id: req.params.itemId}, {

      description: req.body.description,
      cost: req.body.cost,
      quantity:req.body.quantity

  })
  .then(function(data) {
    res.send(data)
  })
  .catch(function(err) {
    res.send('Item was not updated correctly')
  })
})






module.exports = router
