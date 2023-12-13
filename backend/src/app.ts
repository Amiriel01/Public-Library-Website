import 'dotenv/config';
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from 'cookie-parser';
import logger from "morgan";
import cors from 'cors';
import multer from 'multer';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import User from './models/user.ts';

//import schema file
import Staff from "./models/staff"
import indexRouter from './routes/index.ts';
import usersRouter from './routes/users.ts';
import staffRouter from './routes/staff.ts';
import contactRouter from './routes/contact.ts'
import libraryCardRouter from './routes/libraryCard.ts';
import crossLibraryRouter from './routes/crossLibrary.ts';
import volunteerRouter from './routes/volunteer.ts';
import newsletterRouter from './routes/newsletter.ts';
import eventRouter from './routes/event.ts';

const app = express();

// Set up mongoose connection
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
const mongoDB = process.env.SECRET_KEY;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/staff', staffRouter);
app.use('/libraryCard', libraryCardRouter);
app.use('/crossLibrary', crossLibraryRouter);
app.use('/volunteer', volunteerRouter);
app.use('/newsletter', newsletterRouter);
app.use('/event', eventRouter);
app.use('/images', express.static('images'))
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
  res.json(err);
  console.log(err)
});

//setting up mutler options
const upload = multer({ dest: 'images/'});

app.post('/event/images', upload.single('image'), (req, res) => {
  const imageName = req.file.filename
  const description = req.body.description

  console.log(imageName, description)
  res.send({imageName, description})
})



app.listen(3000, "localhost", () => {
  console.log("listening")
})
