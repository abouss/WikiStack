var express = require('express');
var router = express.Router();
var models = require('../models/');


/* GET home page. */
router.get('/', function(req, res, next) {
	
	var docs = models.Page.find(function (err, pages) {
		
      if (err) {
        onErr(err, callback);
      } else {
        //mongoose.connection.close();
        console.log(pages);
        callback("", pages);
    }

	});



  	res.render('index', docs);
});

module.exports = router;
