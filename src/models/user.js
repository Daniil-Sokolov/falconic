'use strict';
const Datastore = require('nedb');
const db = {};
db.users = new Datastore('./db/users.db');
db.users.loadDatabase();
const users = db.users;
const crud = require('falconic/crud');

module.exports = {
	// READ
	find: (callback)=> crud.find(users, (docs)=> callback(docs)),
	findOne: (par, callback)=> crud.findOne(users, par, (docs)=> callback(docs)),
	//CREATE
	add: (data, callback)=> crud.add(users, data, (doc)=> callback(doc)),
	// UPDATE
	update: (par, callback)=> crud.update(users, par, (doc)=> callback(doc)),
	patch: (id, data, callback)=> crud.patch(users, id, data, (doc)=> callback(doc)),
	// DELETE
	remover: (par, callback)=> crud.remover(users, par, (doc)=> callback(doc)),
}