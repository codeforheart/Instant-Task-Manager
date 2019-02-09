const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(morgan('dev'));

// routes to handle requests
const tasksRoutes = require('./api/routes/tasks.routes');

// mongo connect configurations
const mdbConnectDetails = 'mongodb+srv://haim:' +
                           process.env.MONGO_ATLAS_PW + 
                           '@todocluster-dmmpm.mongodb.net/test?retryWrites=true';
mongoose.connect(mdbConnectDetails, 
    { 
        dbName: 'todolist', useNewUrlParser: true 
    })
    .then( () => {
        console.log('Connection to the Atlas Cluster is successful!');
    })
    .catch( (err) => console.log(err));

app.use(morgan('dev')); // handle errors on console
app.use(bodyParser.urlencoded({extended: false})); // handles the request body
app.use(bodyParser.json()); // sets the json interface

app.use('/tasks', tasksRoutes);

// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;