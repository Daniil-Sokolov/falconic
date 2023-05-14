'use strict';

//const render = require('render');
//const redirect = require('redirect');
const forms = require('falconic/post').forms;
const user = require('../models/user');

// READ

const list = (req, res, callback)=> {
	user.find((users)=> {
		const result = {
			users: users
		}
		callback(res.render('/pages/user', result));
	});
}

const id = (req, res, par, callback) => {
	user.findOne(par[0], (data)=> {
		callback(res.render('/pages/userCard', data));
	})
}

// CREATE

const newUser = (req, res, callback) => callback(res.render('/pages/newUser', {}));

const add = (req, res, callback) => {
	forms(req, res, (err, data)=> {
		if(err) throw err;
		user.add(data, (newDoc)=> {
			res.redirect(`/user/id/${newDoc._id}`, res);
		})
	})
}

// UPDATE

const update = (req, res, par, callback) => {
	user.update(par[0], (data)=> {
		callback(res.render('/pages/updateUser', data));
	})
}

const patch = (req, res, par, callback) => {
	const id = par[0];
	forms(req, res, (err, data)=> {
		if(err) throw err;
		user.patch(id, data, (newDoc)=> {
			res.redirect(`/user/id/${id}`, res);
		})
	})
}

// DELETE

const remover = (req, res, par, callback) => {
	user.remover(par[0], (id)=> {
		callback(res.render('/pages/userDeleted', {id: id}));
	})
}

// EXPORT

module.exports = {
	list,
	id,
	newUser,
	add,
	update,
	patch,
	remover,
}



