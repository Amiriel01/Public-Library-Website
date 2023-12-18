import {Router} from "express";
const router = Router();
import { event_list, event_get, event_create, event_edit, event_delete } from '../controllers/eventController.ts';

//GET all events list
router.get("/eventList", event_list());

router.get("/eventList/:age_group", event_list());

//GET single event
router.get("/eventDetail/:id", event_get());

//POST new event
router.post("/eventDetail", event_create());

//PUT edit event
router.put("/eventDetail/:id", event_edit());

//DELETE event
router.delete("/eventDetail/:id", event_delete());

export default router;