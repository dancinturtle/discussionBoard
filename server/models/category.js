var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:1}
	}, {timestamps: true })

var Category = mongoose.model('Category', CategorySchema);
