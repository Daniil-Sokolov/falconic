'use strict';
//const querystring = require('querystring');
const Datastore = require('nedb');
const db = {};
db.users = new Datastore('./db/users.db');
db.users.loadDatabase();
const users = db.users;


const none = {_id: 'None', name: 'None', age: 'None'};
// READ

const find = (callback)=> {
	users.find({}, (err, docs)=> {
		if(err) throw err;
		callback(docs);
	});
}

const findOne = (par, callback)=>{
	if(!par) callback(none);
	//const user = querystring.parse(par);
	users.findOne({_id: par}, (err, docs)=> {
		if(err) throw err;
		callback(docs);
	});
}

//CREATE

const add = (data, callback)=>{
	users.insert(data, (err, newDoc)=> {
		if(err) throw err;
		callback(newDoc)
	});
}

// UPDATE

const update = (par, callback)=>{
	if(!par) callback(none);
	//const user = querystring.parse(par);
	users.findOne({_id: par}, (err, docs)=> {
		if(err) throw err;
		callback(docs);
	});
}

const patch = (id, data, callback)=>{
	users.update({ _id: id }, { $set: data }, {}, function (err, numReplaced) {
		if(err) throw err;
		callback(numReplaced);
	});
}

// DELETE

const remover = (par, callback)=>{
	if(!par) callback(none);
	users.remove({ _id: par }, {}, function (err, numRemoved) {
		if(err) throw err;
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