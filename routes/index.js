var express = require('express');
var router = express.Router();
var path = require('path');

var RegisterController = require('../controllers/RegisterController');


/* GET home page. */
router.get('/', function(req, res, next) {
  var newRegisterController = new RegisterController(req, res, next); 

  //var data = newRegisterController.val;
  //res.render('index', { title: 'Express'+ data });
  //console.log(path.join(__dirname + '/client/dist/index.html'));
  res.sendFile((path.join(__dirname, '../client/dist/index.html')));
});

module.exports = router;
