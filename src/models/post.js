'use strict';
const Datastore = require('nedb');
const db = {};
db.posts = new Datastore('./db/posts.db');
db.posts.loadDatabase();
const posts = db.posts;
const crud = require('falconic/crud');

module.exports = {
	// READ
	find: (callback)=> crud.find(posts, (docs)=> callback(docs)),
	findOne: (par, callback)=> crud.findOne(posts, par, (docs)=> callback(docs)),
	//CREATE
	add: (data, callback)=> crud.add(posts, data, (doc)=> callback(doc)),
	// UPDATE
	update: (par, callback)=> crud.update(posts, par, (doc)=> callback(doc)),
	patch: (id, data, callback)=> crud.patch(posts, id, data, (doc)=> callback(doc)),
	// DELETE
	remover: (par, callback)=> crud.remover(posts, par, (doc)=> callback(doc)),
}