// const express = require('express');
// const router = express.Router();
import {Router} from "express";
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
