'use strict';

module.exports = {
	'/api/method1': (req, res, callback) => {
		console.log(req.url + ' ' + res.statusCode);
		callback({
			status: res.statusCode,
			message: "Hello Danya 11",
		});
	},
	'/api/method2': req => ({
		url: req.url,
		cookie: req.headers.cookie || 'No cookies',
	}),
	'api/method3/*': (req, res, par, callback)=> {
		callback({par: par[0]})
	},
}
