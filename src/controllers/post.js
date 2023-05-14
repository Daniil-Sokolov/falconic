'use strict';
const forms = require('falconic/post').forms;
const post = require('../models/post');

module.exports = {
	// READ
	list: (req, res, callback)=> post.find((posts)=> callback(res.render('/pages/post', {posts: posts}))),
	id: (req, res, par, callback) => post.findOne(par[0], (data)=> callback(res.render('/pages/postCard', data))),
	// CREATE
	newPost: (req, res, callback) => callback(res.render('/pages/newPost', {})),
	add: (req, res, callback) => forms(req, res, (err, data)=> !err
			? post.add(data, (newDoc)=> res.redirect(`/post/id/${newDoc._id}`, res))
			: callback(err)
		),
	// UPDATE
	update: (req, res, par, callback) => post.update(par[0], (data)=> callback(res.render('/pages/updatePost', data))),
	patch: (req, res, par, callback) => forms(req, res, (err, data)=> !err
			? post.patch(par[0], data, (newDoc)=> res.redirect(`/post/id/${par[0]}`, res))
			: callback(err)
		),
	// DELETE
	remover: (req, res, par, callback) => post.remover(par[0], (id)=> callback(res.render('/pages/postDeleted', {id: id}))),
}