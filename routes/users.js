var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
	 //var newRegisterController = new RegisterController(); 

  //var data = newRegisterController.val;
  //res.render('index', { title: 'Express'+ data });
  res.send('respond with a resource');
});

module.exports = router;
