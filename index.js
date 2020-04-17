const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');


const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000 ;


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
        res.json({
            message:err.message,
            error: err
        });

});

mongoose.connect('mongodb://localhost:27017/db',{ useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('mongodb started.');
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }).catch(() => {
    console.log('Mongodb connection failed.');
  })