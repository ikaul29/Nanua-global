const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const passport = require('passport');
// import forms from './dbForms.js'

const logger = require("./middleware/logger");
const connectDB = require('./config/db.js');


// Load config
dotenv.config({ path: './config/config.env' })

// connectDB(); // Mongo Stuff

// App Config
const app = express();
const PORT = process.env.PORT || 8001;

// DB Config




// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars Middlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs',
}));
app.set('view engine', '.hbs');

// Middleware
// app.use(express.json())
// app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

app.use(express.static(path.join(__dirname, 'public'))); // static path
app.use(logger);







// DB Config     Mongo Stuff
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });




// App Endpoints




// Listening
app.listen(PORT, () => console.log(`Listening on port :${PORT}`));