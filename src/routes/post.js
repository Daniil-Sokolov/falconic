'use strict';

const post = require('../controllers/post');

module.exports = {
	'/post': post.list,
	'/post/id/*': post.id,
	'/post/new': post.newPost,
	'/post/add': post.add,
	'/post/update/*': post.update,
	'/post/patch/*': post.patch,
	'/post/delete/*': post.remover,
}