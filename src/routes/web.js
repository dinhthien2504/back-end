const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sample.ejs');
});
router.get('/xinchao', (req, res) => {
    res.send("HIHIIH");
});

module.exports = router; //exports default