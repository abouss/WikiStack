var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models/');


router.use(bodyParser.urlencoded({
        extended: false
}));

router.use(bodyParser.json());



/* GET users listing. */
router.get('/', function(req, res) {
  res.render('add');
});


router.post('/submit', function(req, res) {

	// STUDENT ASSIGNMENT:
	// add definitions of the `title`, `body` and `url_name` variables here
	JSON.stringify(req.body, null, 2);


	var title = req.body.title;
	var body = req.body.body;

	var url_name = generateUrl_name(title);

	var p = new models.Page({ "title": title, "body":body, "url_name":url_name });
	p.save();
	res.redirect('/');


});

var generateUrl_name = function(name) {
  	if (typeof name != "undefined" && name !== "") {
    	// Removes all non-alphanumeric characters from name
    	// And make spaces underscore
    	return name.replace(/\s/ig,"_").replace(/\W/ig,"");
  	} else {
    	// Generates random 5 letter string
    	return Math.random().toString(36).substring(2,7);
  	}
};



module.exports = router;
