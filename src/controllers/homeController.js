const db = require('../config/database');
const getHomePage = (req, res) => {
    //process data

    //call model
    db.query('SELECT *FROM users',
        function (err, results) {
            users = results;
            res.send(JSON.stringify(users));
        }
    )
    // res.render('sample.ejs');
}
const getAboutPage = (req, res) => {
    res.send('Page About');
}

module.exports = {
    getHomePage, getAboutPage
}