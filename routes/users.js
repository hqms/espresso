var express = require('express');
var router = express.Router();

var user_list = [
  {name: 'HQM', address: 'Jakarta'},
  {name: 'Arnest', address: 'Wates'},
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/list', {title: 'users list', users: user_list})
});

router.get('/list', function(req, res, next){
  res.render('users/table', {title: 'users list', users: user_list })
});
module.exports = router;
