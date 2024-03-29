import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import Contact from "../models/contact";

//GET a list of all contact forms submissions with details
export function contact_form_submissions_list() {
    return asyncHandler(async (req, res, next) => {
        const contactFormSubmissionsList = await Contact.find().exec()
        res.json(contactFormSubmissionsList);
    })
};

//GET single contact form submission with details
export function contact_form_submission_get() {
    return asyncHandler(async (req, res, next) => {
        const contactFormSubmissionDetails = await Contact.findById(req.params.id).exec()
        res.json(contactFormSubmissionDetails);
    })
};

//POST contact form submission create
export function contact_form_submission_create() {
    return [
        //validate and sanitize fields
        body("name", "Name cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("phone", "Phone number cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 15 })
            .escape(),
        body("email", "Email cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("help", "Help reason cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("message", "Message cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 500 })
            .escape(),
        body("admin_notes")
            .trim()
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //create staff member object with escaped and trimmed info
            const contactSubmission = new Contact({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                help: req.body.help,
                message: req.body.message,
                admin_notes: req.body.admin_notes,
            });
        
            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array();
                res.json(contactSubmission);
            } else {
                //form data is valid, save the staff member
                res.json(await contactSubmission.save());
            }
        })
    ]
}

//edit contact form submission edit 
export function contact_form_submission_edit() {
    return [
        //validate and sanitize fields
        body("name", "Name cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("phone", "Phone number cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 15 })
            .escape(),
        body("email", "Email cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("help", "Help reason cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("message", "Message cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 500 })
            .escape(),
        body("admin_notes")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 500 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array()
                res.json(errors)
            } else {
                //find the staff member and update
                const contactFormSubmissionUpdate = await Contact.findByIdAndUpdate(req.params.id, { name: req.body.name, phone: req.body.phone, email: req.body.email, help: req.body.help, message: req.body.message, completed: req.body.completed, admin_notes: req.body.admin_notes }, { new: true }).exec()
                //save the staff member update
                res.json(contactFormSubmissionUpdate)
            }
        })
    ]
}

//delete contact form submission
export function contact_form_submission_delete() {
    return asyncHandler(async (req, res, next) => {
        const contactFormSubmissionDelete = await Contact.findByIdAndDelete(req.params.id).exec();
        res.json("item deleted");
    })
}