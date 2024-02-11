import { Router } from "express";
const router = Router();
import { newsletter_subscription_list, newsletter_subscription_get, newsletter_subscription_create, newsletter_subscription_edit, newsletter_subscription_delete } from "../controllers/newsletterSubscriptionController";

//GET all newsletter Submission list
router.get("/newsletterSubscriptionList", newsletter_subscription_list());

//GET newsletter Submission
router.get("/newsletterSubscription/:id", newsletter_subscription_get());

//POST new contactForm Submission
router.post("/newsletterSubscription", newsletter_subscription_create());

//PUT edit contactForm Submission
router.put("/newsletterSubscription/:id", newsletter_subscription_edit());

//DELETE contactForm Submission
router.delete("/newsletterSubscription/:id", newsletter_subscription_delete());

export default router;