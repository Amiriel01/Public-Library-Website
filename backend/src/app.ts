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

//setting up mutler options
const storage = multer.memoryStorage();
const staff = multer({ storage: storage });

// Set up mongoose connection
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
const mongoDB = process.env.SECRET_KEY;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser("guite"));
//get express.static working, this uses public folder to serve files. Multer sends to this directory so express can serve it. Note the name of file. 
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/staff', staffRouter);
app.use('/libraryCard', libraryCardRouter);
app.use('/crossLibrary', crossLibraryRouter);
app.use('/volunteer', volunteerRouter);
app.use('/newsletter', newsletterRouter);
app.use('/event', eventRouter);
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

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// passport.use(
//   new LocalStrategy(async (username, password, done) => {
//     try {
//       const user = await User.findOne({ username: username });
//       if (!user) {
//         return done(null, false, { message: "Incorrect username" });
//       };
//       if (!(await bcrypt.compare(password, user.password))) {
//         return done(null, false, { message: "Incorrect password" });
//       };
//       return done(null, user);
//     } catch(err) {
//       return done(err);
//     };
//   })
// );

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch(err) {
    done(err);
  };
});

// //mutler middleware
// app.post("/staff", staff.single("file"), async (req, res) => {
//   // req.file can be used to access all file properties
//   try {
//     //check if the request has an image or not
//     if (!req.file) {
//       res.json({
//         success: false,
//         message: "You must provide at least 1 file"
//       });
//     } else {
//       let imageUploadObject = {
//         file: {
//           data: req.file.buffer,
//           contentType: req.file.mimetype
//         },
//         fileName: req.body.fileName
//       };
//       const uploadObject = new Upload(imageUploadObject);
//       // saving the object into the database
//       const uploadProcess = await uploadObject.save();
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });


// module.exports = app;

app.listen(3000, "localhost", () => {
  console.log("listening")
})
