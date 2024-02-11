import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import NewsletterSubscription from "../models/newsletterSubscription.ts";

//GET a list of all newsletter subscription submissions with details
export function newsletter_subscription_list() {
    return asyncHandler(async (req, res, next) => {
        const newsletterSubscriptionList = await NewsletterSubscription.find().exec()
        res.json(newsletterSubscriptionList);
    })
};

//GET single newsletter subscription submission with details
export function newsletter_subscription_get() {
    return asyncHandler(async (req, res, next) => {
        const newsletterSubscriptionDetails = await NewsletterSubscription.findById(req.params.id).exec();
        res.json(newsletterSubscriptionDetails);
    })
};

//POST newsletter subscription submission create
export function newsletter_subscription_create() {
    return [
        //validate and sanitize fields
        body("email", "Email cannot be blank")
            .trim()
            .isLength({ min: 1 })
            .isLength({ max: 50 })
            .escape(),

        asyncHandler(async (req, res, next) => {
            //take out validation errors from the request
            const errors = validationResult(req);

            //create staff member object with escaped and trimmed info
            const newsletterSubscriptionSubmission = new NewsletterSubscription({
                email: req.body.email,
            });
            
            //check for errors
            if (!errors.isEmpty()) {
                //take staff information from the form
                errors.array();
                res.json(newsletterSubscriptionSubmission);
            } else {
                //form data is valid, save the staff member
                res.json(await newsletterSubscriptionSubmission.save());
            }
        })
    ]
}

//edit newsletter subscription submission edit 
export function newsletter_subscription_edit() {
    return [
        //validate and sanitize fields
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
                errors.array()
                res.json(errors)
            } else {
                //find the staff member and update
                const newsletterSubscriptionSubmissionUpdate = await NewsletterSubscription.findByIdAndUpdate(req.params.id, { email: req.body.email }, { new: true }).exec()
                //save the staff member update
                res.json(newsletterSubscriptionSubmissionUpdate);
            }
        })
    ]
}

//delete newsletter subscription submission
export function newsletter_subscription_delete() {
    return asyncHandler(async (req, res, next) => {
        const newsletterSubscriptionSubmissionDelete = await NewsletterSubscription.findByIdAndDelete(req.params.id).exec();
        res.json("item deleted");
    })
}