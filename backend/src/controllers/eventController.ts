import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import Event from "../models/event";

//GET a list of all events
export function event_list() {
    return asyncHandler(async (req, res, next) => {
        const eventList = await Event.find().exec();
        res.json(eventList);
    });
};

//GET event by age group
export function event_list_age_group() {
    return asyncHandler(async (req, res, next) => {
        const eventAgeGroupDetails = await Event.find(req.body.age_group).exec();
        res.json(eventAgeGroupDetails);
    });
};

//GET single event
export function event_get() {
    return asyncHandler(async (req, res, next) => {
        const eventDetails = await Event.findById(req.params.id).exec();
        res.json(eventDetails);
    });
};

//POST event
export function event_create() {
    return [
        //validate and sanitize fields
        body("title", "Title cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("program_type", "Program Type cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("age_group", "Age group cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("date", "Date cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("time", "Time cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("description1", "Description1 cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("description2")
            .trim()
            .escape(),
        body("imageURL")
            .trim()
            .escape(),

        asyncHandler(async (req, res, next) => {
            // take out validation errors from the request
            const errors = validationResult(req);

            const eventDetails = new Event({
                title: req.body.title,
                program_type: req.body.program_type,
                age_group: req.body.age_group,
                date: req.body.date,
                time: req.body.time,
                description1: req.body.description1,
                description2: req.body.description2,
                imageURL: req.body.imageURL,
            });

            //check for errors
            if (!errors.isEmpty()) {
                errors.array();
                res.json(errors);
            } else {
                res.json(await eventDetails.save());
            };
        })
    ];
};

//PUT event
export function event_edit() {
    return [
        //validate and sanitize fields
        body("title", "Title cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("program_type", "Program Type cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("age_group", "Age group cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("date", "Date cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("time", "Time cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("description1", "Description1 cannot be blank.")
            .trim()
            .isLength({ min: 1 })
            .escape(),
        body("description2")
            .trim()
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //check for errors
            if (!errors.isEmpty()) {
                errors.array()
                res.json(errors)
            } else {
                const eventEdit = await Event.findByIdAndUpdate(req.params.id, {
                    title: req.body.title,
                    program_type: req.body.program_type,
                    age_group: req.body.age_group,
                    date: req.body.date,
                    time: req.body.time,
                    description1: req.body.description1,
                    description2: req.body.description2,
                },
                    { new: true })
                    .exec()

                res.json(eventEdit);
            };
        })
    ];
};

//DELETE event
export function event_delete() {
    return asyncHandler(async (req, res, next) => {
        const eventDelete = await Event.findByIdAndDelete(req.params.id).exec();
    });
};
