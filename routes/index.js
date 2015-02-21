var express = require('express');
var router = express.Router();
var models = require('../models/');


/* GET home page. */
router.get('/', function(req, res, next) {
	var docs = models.Page.find(function (err, docs) {
		if (err) return console.error(err);
  		console.log(docs);

  		res.render('index', {docs: docs});

	});

});

module.exports = router;
