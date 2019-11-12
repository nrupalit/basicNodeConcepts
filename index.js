const express = require('express');
const path = require('path');
const members = require('./Members.js');

const app = express();

const logger = (req, res, next) => {
    console.log(`id:${members.id}`);
    next();
}

//Init Middlewear
app.use(logger);

//Gets All members
app.get('/api/members', (req, res) => {
    res.json(members);
})

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT);
