import {Router} from "express";
const router = Router();
import { library_card_submissions_list, library_card_submission_get, library_card_submission_create, library_card_submission_edit, library_card_submission_delete} from '../controllers/libraryCardController';

//GET all contactForm Submission list
router.get("/libraryCardSubmissionList", library_card_submissions_list());

//GET contactForm Submission
router.get("/libraryCardSubmission/:id", library_card_submission_get());

//POST new contactForm Submission
router.post("/libraryCardSubmission", library_card_submission_create());

//PUT edit contactForm Submission
router.put("/libraryCardSubmission/:id", library_card_submission_edit());

//DELETE contactForm Submission
router.delete("/libraryCardSubmission/:id", library_card_submission_delete());

export default router;