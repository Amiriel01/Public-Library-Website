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

export default router;
