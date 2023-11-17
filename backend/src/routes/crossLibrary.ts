import {Router} from "express";
const router = Router();
import { cross_library_form_list, cross_library_submission_get, cross_library_submission_create, cross_library_submission_edit, cross_library_submission_delete} from "../controllers/crossLibraryController.ts"

//GET all contactForm Submission list
router.get("/crossLibraryFormList", cross_library_form_list());

//GET contactForm Submission
router.get("/crossLibraryForm/:id", cross_library_submission_get());

//POST new contactForm Submission
router.post("/crossLibraryForm", cross_library_submission_create());

//PUT edit contactForm Submission
router.put("/crossLibraryForm/:id", cross_library_submission_edit());

//DELETE contactForm Submission
router.delete("/crossLibraryForm/:id", cross_library_submission_delete());

export default router;