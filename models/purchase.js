const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema


const purchaseSchema = new Schema({
    description: String,
    moneySpent: Number,
    moneyRequired: Number,
    changeNeeded: Number,
});




const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
