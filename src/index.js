const path = require('path');
const express = require('express');

const morgan = require('morgan');
const handlebars = require('express-handlebars');
var methodOverride = require('method-override');
const route = require("./routes");
require('dotenv').config();
const db = require('./config/db');



//connect to db
db.connect();

const index = express();
const port = 3000;

index.use(express.json());
index.use(express.urlencoded({ extended: true }));

//HTTP logger
// index.use(morgan('combined'));
//Template engine
index.use(express.static(path.join(__dirname, 'public')));
console.log("PATH", path.join(__dirname, 'public'));

index.use(methodOverride('_method'));
// index.engine
// index.engine('handlebars', handlebars.engine() );
index.engine('hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }));
// index.engine('hbs', handlebars({extname:'.hbs'}));

// index.set
index.set('view engine', 'hbs');
index.set('views', path.join(__dirname, 'resources', 'views'));

route(index);

index.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//index.listen
index.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})



