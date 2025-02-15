const path = require('path');
const configViewEngine = (app, express) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //config static filters: imgs, css, js
    app.use(express.static(path.join('./src', 'public')));
};

module.exports = configViewEngine;