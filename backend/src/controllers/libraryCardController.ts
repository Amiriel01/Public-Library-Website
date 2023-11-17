import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import LibraryCard from '../models/libraryCard.ts';

//GET a list of all library card submissions with details
export function library_card_submissions_list() {
    return asyncHandler(async (req, res, next) => {
        const libraryCardSubmissionList = await LibraryCard.find().exec();
        console.log(libraryCardSubmissionList);
        res.json(libraryCardSubmissionList);
    })
}

//GET single library card submission with details
export function library_card_submission_get() {
    return asyncHandler(async (req, res, next) => {
        const librarycardsubmissiondetails = await LibraryCard.findById(req.params.id).exec()

        console.log(librarycardsubmissiondetails);
        res.json(librarycardsubmissiondetails);
    })
}

//POST library card submission create
export function library_card_submission_create() {
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
        body("additional_information")
            .trim()
            .isLength({ min: 1 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //create library card object with escaped and trimmed info
            const libraryCardDetails = new LibraryCard({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                additional_information: req.body.additional_information,
            });

            console.log(req.body)

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array();
                res.json(errors);
                console.log(errors)
            } else {
                //form data is valid, save the staff member
                console.log(libraryCardDetails);
                res.json(await libraryCardDetails.save());
            }
        })
    ]
}

//edit contact form submission edit 
export function library_card_submission_edit() {
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
        body("additional_information")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 250 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array()
                console.log(errors)
                res.json(errors)
            } else {
                //find the staff member and update
                const libraryCardUpdate = await LibraryCard.findByIdAndUpdate(req.params.id, { name: req.body.name, phone: req.body.phone, email: req.body.email, additional_information: req.body.additional_information, card_issued: req.body.card_issued}, { new: true }).exec()
                //save the staff member update
                console.log(libraryCardUpdate)
                res.json(libraryCardUpdate)
            }
        })
    ]
}

//delete contact form submission
export function library_card_submission_delete() {
    return asyncHandler(async (req, res, next) => {
        const libraryCardSubmissionDelete = await LibraryCard.findByIdAndRemove(req.params.id).exec();
        console.log("item deleted");
        res.json("item deleted");
    })
}
