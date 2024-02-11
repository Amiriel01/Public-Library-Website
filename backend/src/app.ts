import 'dotenv/config';
import createError from "http-errors";
import express from "express";
import cors from 'cors';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import staffRouter from './routes/staff';
import contactRouter from './routes/contact'
import libraryCardRouter from './routes/libraryCard';
import crossLibraryRouter from './routes/crossLibrary';
import volunteerRouter from './routes/volunteer';
import newsletterRouter from './routes/newsletter';
import eventRouter from './routes/event';

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
app.use('/public', express.static('public'))
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
});

app.listen(3000, "localhost", () => {
  console.log("listening")
})
