const express  = require('express');
const User     = require('../models/purchase');
const Vending  = require('../models/vending')
const mongose  = require('mongoose');
const router   = express.Router();

router.get('/', function(req, res) {
  res.send('Here is my Vending Machine API')
})

// get a list of items
router.get('/api/customer/items', function(req, res) {
  Vending.find({})
  .then(function(data){
  res.send(data)
}).catch(function(err) {
  res.send('there are no items to buy')
})
});

// purchase an item
// router.post('/api/customer/items:itemId/purchases')


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
    quanity: req.body.quanity
  })
  .then(function(data) {
    res.send(data)
  })
  .catch(function(err) {
    res.send('something went wrong')
  });
});


// update item quantity, description, and cost
// router.put('/api/vendor/items/:itemId', function(req, res) {
//
//
//   Vending.update({_id: req.params.id}, {
//     description: req.body.description,
//     cost: req.body.cost,
//     quanity:req.body.quanity
//   })
//   .then(function(data) {
//     res.send(data)
//   })
//   .catch(function(err) {
//     res.send('item was not updated correctly')
//   })
// })






module.exports = router
