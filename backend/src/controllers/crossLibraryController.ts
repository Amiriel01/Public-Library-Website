import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import CrossLibraryForm from '../models/crossLibrary.ts';

//GET a list of all cross library forms submissions with details
export function cross_library_form_list() {
    return asyncHandler(async (req, res, next) => {
        const crossLibraryFormList = await CrossLibraryForm.find().exec()
        console.log(crossLibraryFormList);
        res.json(crossLibraryFormList);
    })
};

//GET single cross library form submission with details
export function cross_library_submission_get() {
    return asyncHandler(async (req, res, next) => {
        const crossLibraryFormDetails = await CrossLibraryForm.findById(req.params.id).exec()
        console.log(crossLibraryFormDetails);
        res.json(crossLibraryFormDetails);
    })
};

//POST cross library form submission create
export function cross_library_submission_create() {
    return [
        //validate and sanitize fields
        body("title", "Title cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("author", "Author cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 25 })
            .escape(),
        body("material_type", "Material type cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("name", "Name cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
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
        body("library_card_number", "Library card number cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 10 })
            .escape(),
        body("order_notes")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 500 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            const crossLibraryFormSubmission = new CrossLibraryForm({
                title: req.body.title,
                author: req.body.author,
                material_type: req.body.material_type,
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                library_card_number: req.body.library_card_number,
                order_notes: req.body.order_notes,
            });

            console.log(req.body)

            //check for errors
            if (!errors.isEmpty()) {
                errors.array();
                res.json(crossLibraryFormSubmission);
                console.log(errors)
            } else {
                console.log(crossLibraryFormSubmission);
                res.json(await crossLibraryFormSubmission.save());
            }
        })
    ]
};

//edit cross library form submission edit 
export function cross_library_submission_edit() {
    return [
        //validate and sanitize fields
        body("title", "Title cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),
        body("author", "Author cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 25 })
            .escape(),
        body("material_type", "Material type cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("name", "Name cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
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
        body("library_card_number", "Library card number cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 10 })
            .escape(),
        body("order_notes")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 500 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //check for errors
            if (!errors.isEmpty()) {
                errors.array()
                console.log(errors)
                res.json(errors)
            } else {
                const crossLibraryFormEdit = await CrossLibraryForm.findByIdAndUpdate(req.params.id, { title: req.body.title, author: req.body.author, material_type: req.body.material_type, name: req.body.name, phone: req.body.phone, email: req.body.email, library_card_number: req.body.library_card_number, ordered: req.body.ordered, order_notes: req.body.order_notes }, { new: true }).exec()

                console.log(crossLibraryFormEdit);
                res.json(crossLibraryFormEdit);
            }
        })
    ]
}

//delete cross library form submission
export function cross_library_submission_delete() {
    return asyncHandler(async (req, res, next) => {
        const crossLibrarySubmissionDelete = await CrossLibraryForm.findByIdAndRemove(req.params.id).exec();
        console.log("item deleted");
        res.json("item deleted");
    })
}