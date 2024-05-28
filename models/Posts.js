/* const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({    	
	no: {
		type: String,
		required: true
	},
	song: {
		type: String,
		required: true
	},
	artist: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Posts', PostSchema); */


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({ 
	dateOrdered: {
	type: String,
	required: true
	},
	material: {
	type: String,
	required: true
	},
	color: {
	type: String,
	required: true
	},
	size: {
	type: String,
	required: true
	},
	price: {
	type: String,
	required: true
	},
	name: {
	type: String,
	required: true
	},
	born: {
	type: String,
	required: true
	},
	died: {
	type: String,
	required: true
	},
	dedication: {
	type: String,
	required: true
	},
	remarks: {
	type: String,
	required: true
	},
	cellphoneNo: {
	type: String,
	required: true
	}
	});

module.exports = mongoose.model('Posts', PostSchema);