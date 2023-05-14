'use strict';
//const querystring = require('querystring');
const Datastore = require('nedb');
const db = {};
db.posts = new Datastore('./db/posts.db');
db.posts.loadDatabase();
const posts = db.posts;

const none = {_id: 'None', title: 'None', description: 'None', body: 'None'};

// READ

const find = (callback)=> {
	posts.find({}, (err, docs)=> {
		if(err) throw err;
		callback(docs);
	});
}

const findOne = (par, callback)=>{
	if(!par) callback(none);
	//const post = querystring.parse(par);
	posts.findOne({_id: par}, (err, docs)=> {
		if(err) throw err;
		callback(docs);
	});
}

//CREATE

const add = (data, callback)=>{
	posts.insert(data, (err, newDoc)=> callback(newDoc));
}

// UPDATE

const update = (par, callback)=>{
	if(!par) callback(none);
	//const post = querystring.parse(par);
	posts.findOne({_id: par}, (err, docs)=> {
		if(err) throw err;
		callback(docs);
	});
}

const patch = (id, data, callback)=>{
	posts.update({ _id: id }, { $set: data }, {}, function (err, numReplaced) {
		callback(numReplaced);
	});
}

// DELETE

const remover = (par, callback)=>{
	if(!par) callback(none);
	posts.remove({ _id: par }, {}, function (err, numRemoved) {
		callback(par)
	});
	
}

// EXPORT

module.exports = {
	find,
	findOne,
	add,
	update,
	patch,
	remover,
};