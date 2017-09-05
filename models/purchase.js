const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/vending');

const purchaseSchema = new Schema({
    moneySpent: Number,
    moneyRequired: Number,
    changeNeeded: Number,
});




const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;