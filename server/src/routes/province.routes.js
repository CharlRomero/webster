import { Router } from "express";

import {
  getProvinces,
  getProvince,
} from "../controller/province.controller.js";

const router = Router();

router.get("/province", getProvinces);
router.get("/province/:id", getProvince);

export default router;
