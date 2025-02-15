const express = require('express');
const { getHomePage, getAboutPage } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
// router.get('/xinchao', );
router.get('/about', getAboutPage);
module.exports = router; //exports default