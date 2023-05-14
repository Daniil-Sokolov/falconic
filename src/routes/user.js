'use strict';

const user = require('../controllers/user');

module.exports = {
	'/user': user.list,
	'/user/id/*': user.id,
	'/user/new': user.newUser,
	'/user/add': user.add,
	'/user/update/*': user.update,
	'/user/patch/*': user.patch,
	'/user/delete/*': user.remover,
	'/userReact': user.listR,
}