'use strict';
const forms = require('falconic/post').forms;
const user = require('../models/user');

module.exports = {
	// READ
	listR: (req, res, callback)=> user.find((users)=> callback(users)),
	list: (req, res, callback)=> user.find((users)=> callback(res.render('/pages/user', {users: users}))),
	id: (req, res, par, callback) => user.findOne(par[0], (data)=> callback(res.render('/pages/userCard', data))),
	// CREATE
	newUser: (req, res, callback) => callback(res.render('/pages/newUser', {})),
	add: (req, res, callback) => forms(req, res, (err, data)=> !err
			? user.add(data, (newDoc)=> res.redirect(`/user/id/${newDoc._id}`, res))
			: callback(err)
		),
	// UPDATE
	update: (req, res, par, callback) => user.update(par[0], (data)=> callback(res.render('/pages/updateUser', data))),
	patch: (req, res, par, callback) => forms(req, res, (err, data)=> !err
			? user.patch(par[0], data, (newDoc)=> res.redirect(`/user/id/${par[0]}`, res))
			: callback(err)
		),
	// DELETE
	remover: (req, res, par, callback) => user.remover(par[0], (id)=> callback(res.render('/pages/userDeleted', {id: id}))),
}