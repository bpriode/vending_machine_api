const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema     = mongoose.Schema


const purchaseSchema = new Schema({
    vendingId: String,
    moneySpent: Number,
    moneyRequired: Number,
    changeNeeded: Number,
    purchasedAt: {type:Date, default:Date.now}
});




const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
