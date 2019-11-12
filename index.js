const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middlewear/logger')

const app = express();



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
