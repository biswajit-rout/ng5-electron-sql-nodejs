var express = require('express');
var router = express.Router();
var RegisterController = require('../controllers/RegisterController');

/* GET users listing. */
router.post('/register', function(req, res, next) {
	 var newRegisterController = new RegisterController(req, res, next); 

  //var data = newRegisterController.val;
  //res.render('index', { title: 'Express'+ data });
  //res.send('respond with a resource Express'+ data );
});

module.exports = router;
