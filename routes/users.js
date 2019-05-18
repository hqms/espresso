var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/list', {title: 'users list', users: [
    {name: 'HQM', address: 'Jakarta'},
    {name: 'Arnest', address: 'Wates'},
  ]})
});

module.exports = router;
