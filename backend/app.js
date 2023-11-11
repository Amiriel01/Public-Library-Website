require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const multer  = require('multer');

//import schema file
const Staff = require("./models/staff");


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

//setting up mutler options
const storage = multer.memoryStorage();
const staff = multer({ storage: storage });

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.SECRET_KEY;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//mutler middleware
app.post("/staff", staff.single("file"), async (req, res) => {
  // req.file can be used to access all file properties
  try {
    //check if the request has an image or not
    if (!req.file) {
      res.json({
        success: false,
        message: "You must provide at least 1 file"
      });
    } else {
      let imageUploadObject = {
        file: {
          data: req.file.buffer,
          contentType: req.file.mimetype
        },
        fileName: req.body.fileName
      };
      const uploadObject = new Upload(imageUploadObject);
      // saving the object into the database
      const uploadProcess = await uploadObject.save();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});


module.exports = app;
