var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"productId": String,
	"productName": String,
	"salePrice": Number,
	"checked": String,
	"productImage": String,
	"productNum": String
});

module.exports = mongoose.model('Good', productSchema);
