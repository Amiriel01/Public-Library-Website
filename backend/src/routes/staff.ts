// const express = require('express');
// const router = express.Router();
import {Router} from "express";
const router = Router();

// const staff_controller = require("../controllers/staffController");
import {staff_list, staff_member_create, staff_member_delete, staff_member_edit, staff_member_get} from "../controllers/staffController";

//GET all staff list 
router.get("/staffList", staff_list());

//GET staff member
router.get("/staff/:id", staff_member_get());

//POST new staff member
router.post("/staff", staff_member_create());

//PUT edit staff member
router.put("/staff/:id", staff_member_edit());

//DELETE staff member
router.delete("/staff/:id", staff_member_delete());

export default router;