const express = require('express');
const path = require('path');
const logger = require('./middlewear/logger')

const app = express();



//Init Middlewear
// app.use(logger);

//Body parser Middlewear
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//Get routes from routes/api/member
app.use('/api/members', require('./routes/api/member'));

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
