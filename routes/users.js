var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

 
 router.get('/cool', function(req, res, next) {
    res.send('you are so cool');
  });

  router.get('/cool/nice', function(req, res, next) {
    res.send('you are so nice of days');
 });



module.exports = router;
