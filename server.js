//Imports
const express = require("express");

//Express setup
const app = express();
const PORT = process.env.PORT || 3000;

//Setup the Express app 
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing for API and HTML
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//Setting a listener to start our server
app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})