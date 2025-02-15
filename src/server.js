require('dotenv').config();//framework dotenv
const express = require('express');//framework express 

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();//App
const port = process.env.PORT || 8081;//port
const localhost = process.env.LOCAL_HOST;//host

//config template engine
configViewEngine(app);

//Khai báo route
app.use('/', webRoutes)

app.listen(port, localhost, () => {
    console.log(`Example app listening on port ${port}`);
});