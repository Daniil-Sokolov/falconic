'use strict';

//const render = require('falconic/render');

module.exports = {
  '/': (req, res, callback)=> callback(res.render('/pages/index', {})),
  '/about': (req, res, callback)=> callback(res.render('/pages/about', {})),
  '/hello': { hello: 'world Daniil', andArray: [1, 2, 3, 4, 5, 6, 7, 8] },
  '/par/*': (req, res, par, callback) => callback({ parameter: par[0] }),
  '/chat': (req, res, callback)=> callback(res.render('/pages/chat', {})),
  '/react': (req, res, callback)=> callback(res.render('/pages/react', {})),
};