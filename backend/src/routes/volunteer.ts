import {Router} from "express";
const router = Router();
import { volunteer_form_list, volunteer_form_submission_get, volunteer_form_submission_post, volunteer_form_submission_edit, volunteer_form_submission_delete} from "../controllers/volunteerController.ts";

//GET all volunteer form submissions list
router.get("/volunteerFormList", volunteer_form_list());

//GET volunteer form single submission
router.get("/volunteerForm/:id", volunteer_form_submission_get());

//POST new volunteer form submission
router.post("/volunteerForm", volunteer_form_submission_post());

//PUT edit volunteer form submission
router.put("/volunteerForm/:id", volunteer_form_submission_edit());

//DELETE volunteer form submission
router.delete("/volunteerForm/:id", volunteer_form_submission_delete());

export default router;