import { Router } from "express";

import { getPartyByProvince } from "../controller/suffrage.controller.js";

const router = Router();

router.get("/suffrage/:id", getPartyByProvince);

export default router;
