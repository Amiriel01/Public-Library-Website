import {Router} from "express";
const router = Router();
import { contact_form_submissions_list, contact_form_submission_get, contact_form_submission_create, contact_form_submission_edit, contact_form_submission_delete} from '../controllers/contactController.ts';

//GET all contact list
router.get("/contactFormList", contact_form_submissions_list());

//GET staff member
router.get("/contactForm/:id", contact_form_submission_get());

//POST new staff member
router.post("/contactForm", contact_form_submission_create());

//PUT edit staff member
router.put("/contactForm/:id", contact_form_submission_edit());

//DELETE staff member
router.delete("/contactForm/:id", contact_form_submission_delete());

export default router;