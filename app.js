const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const exphbs = require('express-handlebars');
const passport = require('passport');
// import forms from './dbForms.js'

const logger = require("./middleware/logger");
const connectDB = require('./config/db.js');
const mongoConnect = require('./util/database').mongoConnect;


// Load config
dotenv.config({ path: './config/config.env' })
mongoose.set('useCreateIndex', true);
// connectDB(); // Mongo Stuff

// App Config
const app = express();
const PORT = process.env.PORT || 8001;

// DB Config




// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handlebars Middlebars
// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     extname: 'hbs',
// }));
//app.set('view engine', '.hbs');

app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

app.use(express.static(path.join(__dirname, 'public'))); // static path
app.use(logger);







// DB Config     Mongo Stuff
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch(err => console.log(err));


// App Endpoints