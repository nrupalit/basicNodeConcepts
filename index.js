const express = require('express');
const path = require('path');
// const logger = require('./middlewear/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

//Init Handlebars
app.engine('handlebars', exphbs( { defaultLayout: 'main' } ));
app.set('view engine', 'handlebars');

//Get route
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Memebers APP',
        members

    });
});

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
