// const asyncHandler = require("express-async-handler");
import { body, validationResult } from 'express-validator'
// const { body, validationResult } = require("express-validator");
// const Staff = require("../models/staff");
import Staff from "../models/staff";
import asyncHandler from "express-async-handler";


//GET a list of all staff with details
export function staff_list() {
    return asyncHandler(async (req, res, next) => {
        const staffList = await Staff.find().exec();
        res.json(staffList);
    })
}

//GET single staff member with details
export function staff_member_get() {
    return asyncHandler(async (req, res, next) => {
        const staffMember = await Staff.findById(req.params.id).exec();
        res.json(staffMember);
    })
}

//POST staff member create
export function staff_member_create() {
    return [
        //validate and sanitize fields
        body("image", "Image must be present.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("title", "Job title cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("name", "Name cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("phone", "Phone number cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 20 })
            .escape(),
        body("email", "Email cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //create staff member object with escaped and trimmed info
            const staff = new Staff({
                image: req.body.image,
                title: req.body.title,
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
            });

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array();
                res.json(staff);
            } else {
                //form data is valid, save the staff member
                res.json(await staff.save());
            }
        })
    ]
}

//edit staff member 
export function staff_member_edit() {
    return [
        //validate and sanitize fields
        body("image", "Image must be present.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("title", "Job title cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("name", "Name cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("phone", "Phone number cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 20 })
            .escape(),
        body("email", "Email cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),

        asyncHandler(async (req, res, next) => {
             //take out validation errors from the request
             const errors = validationResult(req);

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array();
                res.json("There are errors, look at the console.")
            } else {
                //find the staff member and update
                const staffMemberUpdate = await Staff.findByIdAndUpdate(req.params.id, { image: req.body.image, title: req.body.title, name: req.body.name, phone: req.body.phone, email: req.body.email }, { new: true }).exec()
                //save the staff member update
                res.json(staffMemberUpdate);
            }
        }),
    ];
}

//delete staff member
export function staff_member_delete() {
    return asyncHandler(async (req, res, next) => {
        const staffMemberDelete = await Staff.findByIdAndDelete(req.params.id).exec();
        res.json(staffMemberDelete);
    })
}
