const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Staff = require("../models/staff");


// exports.staff_list = asyncHandler(async (req, res, next) => {
//     const staffList = await Staff.find().exec()

//     console.log(staffList);
//     res.json(staffList);
// })

//GET a list of all staff with details
export function staff_list() {
    return asyncHandler(async (req, res, next) => {
        const staffList = await Staff.find().exec()

        console.log(staffList);
        res.json(staffList);
    })
}

//GET single staff member with details
export function staff_member_get() {
    return asyncHandler(async (req, res, next) => {
        const staffMember = await Staff.findById(req.params.id).exec()

        console.log(staffMember);
        res.json(staffMember);
    })
}

// exports.staff_member_get = asyncHandler(async (req, res, next) => {
//     const staffMember = await Staff.findById(req.params.id).exec()

//     console.log(staffMember);
//     res.json(staffMember);
// })

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
                console.log(staff);
                res.json(await staff.save());
            }
        })
    ]
}
// exports.staff_member_create = [
//     //validate and sanitize fields
//     body("image", "Image must be present.")
//         .trim()
//         .isLength({ min: 1 })
//         .escape(),
//     body("title", "Job title cannot be blank.")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 50 })
//         .escape(),
//     body("name", "Name cannot be blank")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 50 })
//         .escape(),
//     body("phone", "Phone number cannot be blank.")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 20 })
//         .escape(),
//     body("email", "Email cannot be blank")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 50 })
//         .escape(),

//     asyncHandler(async (req, res, next) => {
//         //take out validation errors from the request
//         const errors = validationResult(req);

//         //create staff member object with escaped and trimmed info
//         const staff = new Staff({
//             image: req.body.image,
//             title: req.body.title,
//             name: req.body.name,
//             phone: req.body.phone,
//             email: req.body.email,
//         });

//         //check for errors
//         if (!errors.isEmpty()) {
//             //take staff information from the form
//             errors.array();
//             res.json(staff);
//         } else {
//             //form data is valid, save the staff member
//             console.log(staff);
//             res.json(await staff.save());
//         }
//     })
// ]

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
                errors.array()
                res.json(console.log(errors))
            } else {
                //find the staff member and update
                const staffMemberUpdate = await Staff.findByIdAndUpdate(req.params.id, { image: req.body.image, title: req.body.title, name: req.body.name, phone: req.body.phone, email: req.body.email }, { new: true }).exec()
                //save the staff member update
                console.log(staffMemberUpdate)
                return res.json(staffMemberUpdate)
            }
        })
    ]
}

// exports.staff_member_edit = [
//     //validate and sanitize fields
//     body("image", "Image must be present.")
//         .trim()
//         .isLength({ min: 1 })
//         .escape(),
//     body("title", "Job title cannot be blank.")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 50 })
//         .escape(),
//     body("name", "Name cannot be blank")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 50 })
//         .escape(),
//     body("phone", "Phone number cannot be blank.")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 20 })
//         .escape(),
//     body("email", "Email cannot be blank")
//         .trim()
//         .isLength({ min: 1 })
//         .isLength({ max: 50 })
//         .escape(),

//     asyncHandler(async (req, res, next) => {
//         //take out validation errors from the request
//         const errors = validationResult(req);

//         //check for errors
//         if (!errors.isEmpty()) {
//             //take staff information from the form
//             errors.array()
//             res.json(console.log(errors))
//         } else {
//             //find the staff member and update
//             const staffMemberUpdate = await Staff.findByIdAndUpdate(req.params.id, { image: req.body.image, title: req.body.title, name: req.body.name, phone: req.body.phone, email: req.body.email }, { new: true }).exec()
//             //save the staff member update
//             console.log(staffMemberUpdate)
//             return res.json(staffMemberUpdate)
//         }
//     })
// ]

//delete staff member
export function staff_member_delete() {
    return asyncHandler(async (req, res, next) => {
        const staffMemberDelete = await Staff.findByIdAndRemove(req.params.id).exec();
        res.json(staffMemberDelete);
    })
}
// exports.staff_member_delete = asyncHandler(async (req, res, next) => {
//     const staffMemberDelete = await Staff.findByIdAndRemove(req.params.id).exec();
//     res.json(staffMemberDelete);
// })