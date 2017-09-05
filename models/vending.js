const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema


const vendingSchema = new Schema({
    description: { type: String, required: true},
    cost: Number,
    quantity: Number
});




const Vending = mongoose.model('Vending', vendingSchema);

module.exports = Vending;
