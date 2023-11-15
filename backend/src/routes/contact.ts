import {Router} from "express";
const router = Router();
import { contact_form_submissions_list, contact_form_submission_get, contact_form_submission_create, contact_form_submission_edit, contact_form_submission_delete} from '../controllers/contactController.ts';

//GET all contactForm Submission list
router.get("/contactFormList", contact_form_submissions_list());

//GET contactForm Submission
router.get("/contactForm/:id", contact_form_submission_get());

//POST new contactForm Submission
router.post("/contactForm", contact_form_submission_create());

//PUT edit contactForm Submission
router.put("/contactForm/:id", contact_form_submission_edit());

//DELETE contactForm Submission
router.delete("/contactForm/:id", contact_form_submission_delete());

export default router;