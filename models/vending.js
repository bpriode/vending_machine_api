const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/vending');

const vendingSchema = new Schema({
    description: { type: String, required: true},
    cost: Number,
    quanity: Number
});




const Vending = mongoose.model('Vending', vendingSchema);

module.exports = Vending;
