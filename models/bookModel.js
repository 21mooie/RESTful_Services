// var mongoose = require('mongoose');
// 	Schema = mongoose.Schema();

// var bookModel = new Schema({
// 	title: {
// 		type: String
// 	},
// 	author: {
// 		type: String
// 	},
// 	genre: {
// 		type: String
// 	},
// 	read: {
// 		type: Boolean, default:false
// 	}
// });

// models.exports = mongoose.model('Book',bookModel);

var mongoose = require('mongoose');

var bookModel = mongoose.Schema({
title: {type:String},
author: {type:String},
genre: {type:String},
read: {type:Boolean, default:false}
});

module.exports = mongoose.model('Book',bookModel);