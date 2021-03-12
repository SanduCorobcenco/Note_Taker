//Dependencies
const path = require('path');

//Routing
module.exports = (app) => {
    //HTML GET request
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));    
    });
    
    app.post('/notes', (req, res) => {
        res.send('This is a post request');
    });

    //if no matching route is found default to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}