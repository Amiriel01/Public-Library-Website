const express = require('express');
const router = express.Router();
const staff_controller = require("../controllers/staffController");

//GET all staff list 
router.get("/staffList", staff_controller.staff_list);

//GET staff member
router.get("/staff/:id", staff_controller.staff_member_get);

//POST new staff member
router.post("/staff", staff_controller.staff_member_create);

//PUT edit staff member
router.put("/staff/:id", staff_controller.staff_member_edit);

//DELETE staff member
router.delete("/staff/:id", staff_controller.staff_member_delete);