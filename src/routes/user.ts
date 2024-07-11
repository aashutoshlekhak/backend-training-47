import express from "express";

import { authenticate, authorize } from "../middlewares/auth";

import { createUser, getUserById, getUsers } from "../controller/user";
import { validateReqBody, validateReqQuery } from "../middlewares/validator";
import { createUserBodySchema, getUserQuerySchema } from "../schema/user";

const router = express();

router.get("/", validateReqQuery(getUserQuerySchema), getUsers);

router.get("/:id", getUserById);

router.post("/", validateReqBody(createUserBodySchema), createUser);

router.put("/:id", (req, res) => {
  res.json({
    message: "User updated",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "User deleted",
  });
});

export default router;
