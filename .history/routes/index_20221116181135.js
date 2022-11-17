let express = require('express');
const router = express.Router();
let controllerIndex = require('../controllers/index');

// Routes
router.get('/', controllerIndex.home);

router.get('/orderlist', function(req, res, next) {
  res.render('home', { title: 'Restaurants'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Restaurants'});
});
router.get('/edit', function(req, res, next) {
  res.render('editRestaurant', { title: 'edit'});
});
router.get('/book', function(req, res, next) {
  res.render('booking', { title: 'book'});
});



module.exports = router;