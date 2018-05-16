var express = require('express');
var router = express.Router();

var RegisterController = require('../controllers/RegisterController');


/* GET home page. */
router.get('/', function(req, res, next) {
  var newRegisterController = new RegisterController(); 

  var data = newRegisterController.val;
  res.render('index', { title: 'Express'+ data });
});

module.exports = router;
