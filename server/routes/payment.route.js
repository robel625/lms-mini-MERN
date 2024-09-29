import { Router } from "express";
const router = Router();
import { checkout, verify } from "../controller/payment.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

router.route("/checkout").post(isLoggedIn, checkout);

router.route("/verify").get( verify);

export default router;
