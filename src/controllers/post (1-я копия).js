'use strict';

//const render = require('render');
//const redirect = require('redirect');
const forms = require('falconic/post').forms;
const post = require('../models/post');

// READ
const list = (req, res, callback)=> {
	post.find((posts)=> {
		const result = {
			posts: posts
		}
		callback(res.render('/pages/post', result));
	});
}

const id = (req, res, par, callback) => {
	post.findOne(par[0], (data)=> {
		callback(res.render('/pages/postCard', data));
	})
}

// CREATE
const newPost = (req, res, callback) => callback(res.render('/pages/newPost', {}));

const add = (req, res, callback) => {
	forms(req, res, (err, data)=> {
		if(err) throw err;
		post.add(data, (newDoc)=> {
			res.redirect(`/post/id/${newDoc._id}`, res);
		})
	})
}

// UPDATE
const update = (req, res, par, callback) => {
	post.update(par[0], (data)=> {
		callback(res.render('/pages/updatePost', data));
	})
}

const patch = (req, res, par, callback) => {
	const id = par[0];
	forms(req, res, (err, data)=> {
		if(err) throw err;
		post.patch(id, data, (newDoc)=> {
			res.redirect(`/post/id/${id}`, res);
		})
	})
}

// DELETE
const remover = (req, res, par, callback) => {
	post.remover(par[0], (id)=> {
		callback(res.render('/pages/postDeleted', {id: id}));
	})
}

// EXPORT
module.exports = {
	list,
	id,
	newPost,
	add,
	update,
	patch,
	remover,
}