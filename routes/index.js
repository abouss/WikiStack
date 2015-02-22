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

router.get('/wiki/:url', function(req, res) {
	var url = req.params.url;

    var docs = models.Page.find({url_name: url}, function (err, data) {
		if (err) return console.error(err);
  		console.log(data);

  		res.render('show', {docs: data});

	});


});


module.exports = router;
