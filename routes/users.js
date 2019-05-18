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

/* GET users listing and generate table. */
router.get('/list', function(req, res, next){
  res.render('users/table', {title: 'users list', users: user_list })
});

/* GET users detail base on their's username . */
router.get('/detail/:username', function(req, res, next){
  u = user_list.find(user => user.name === req.params.username )
  res.render('users/detail', {title: 'Detail user', user: u})
});
module.exports = router;
