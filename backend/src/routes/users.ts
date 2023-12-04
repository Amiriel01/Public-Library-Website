// const express = require('express');
// const router = express.Router();
import {Router} from "express";
const router = Router();
import passport from 'passport';
import { user_get } from "../controllers/userController.ts";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET user details
router.get("/user/:id", user_get());
// router.get("/staff/:id", staff_member_get());

//GET login form//
// router.get("/login", user_get())

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     // successRedirect: "/",
//     // failureRedirect: "/users/login"
    
//   })
// );

// router.get("/logout", (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/")
//   });
// });

export default router;
