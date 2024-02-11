import {Router} from "express";
const router = Router();
import { cross_library_form_list, cross_library_submission_get, cross_library_submission_create, cross_library_submission_edit, cross_library_submission_delete} from "../controllers/crossLibraryController"

//GET all cross library Submission list
router.get("/crossLibraryFormList", cross_library_form_list());

//GET cross library Submission
router.get("/crossLibraryForm/:id", cross_library_submission_get());

//POST new cross library Submission
router.post("/crossLibraryForm", cross_library_submission_create());

//PUT edit cross library Submission
router.put("/crossLibraryForm/:id", cross_library_submission_edit());

//DELETE cross library Submission
router.delete("/crossLibraryForm/:id", cross_library_submission_delete());

export default router;