import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import VolunteerForm from "../models/volunteerForm.ts";
import exp from 'constants';

//GET a list of all volunteer form submissions
export function volunteer_form_list() {
    return asyncHandler(async (req, res, next) => {
        const volunteerFormList = await VolunteerForm.find().exec();
        console.log(volunteerFormList);
        res.json(volunteerFormList);
    });
};

//GET single volunteer form submission
export function volunteer_form_submission_get() {
    return asyncHandler(async (req, res, next) => {
        const volunteerFormSubmissionDetails = await VolunteerForm.findById(req.params.id).exec();
        console.log(volunteerFormSubmissionDetails);
        res.json(volunteerFormSubmissionDetails);
    });
};

//POST volunteer form submission
export function volunteer_form_submission_post() {
    return [
        //validate and sanitize fields
        body("name", "Name cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("phone", "Phone cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("email", "Email cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("work_experience", "Work experience cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("volunteer_experience", "Volunteer experience cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("interview_notes")
            .trim()
            .escape(),

        asyncHandler(async (req, res, next) => {
            // take out validation errors from the request
            const errors = validationResult(req);

            const volunteerFormubmission = new VolunteerForm({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                work_experience: req.body.work_experience,
                volunteer_experience: req.body.volunteer_experience,
                interview_notes: req.body.interview_notes,
            });

            console.log(req.body)

            //check for errors
            if (!errors.isEmpty()) {
                errors.array();
                res.json(volunteerFormubmission);
                console.log(errors)
            } else {
                console.log(volunteerFormubmission);
                res.json(await volunteerFormubmission.save());
            };
        })
    ];
};

//PUT (edit) volunteer form submission
export function volunteer_form_submission_edit() {
    return [
        //validate and sanitize fields
        body("name", "Name cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("phone", "Phone cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("email", "Email cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("work_experience", "Work experience cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("volunteer_experience", "Volunteer experience cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("interview_notes")
            .trim()
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
                const volunteerFormEdit = await VolunteerForm.findByIdAndUpdate(req.params.id, {
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    work_experience: req.body.work_experience,
                    volunteer_experience: req.body.volunteer_experience,
                    interview_notes: req.body.interview_notes,
                },
                    { new: true })
                    .exec()

                console.log(volunteerFormEdit);
                res.json(volunteerFormEdit);
            };
        })
    ];
};

//DELETE volunteer form submission
export function volunteer_form_submission_delete() {
    return asyncHandler(async(req, res, next) => {
        const volunteerFormDelete = await VolunteerForm.findByIdAndDelete(req.params.id).exec();
        console.log("item deleted");
    });
};
