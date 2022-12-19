import express from "express";
import {
  register,
  findAllUsers,
  findSingleUser,
  updateUser,
  deleteUserfromDB
} from "../controllers/user";
const router = express.Router();

router.post("/register", register);
router.get("/allUsers", findAllUsers);
router.get("/SingleUsers/:userID", findSingleUser);
router.put("/updateUser/:userID", updateUser);
router.delete("/deleteUser/:userID", deleteUserfromDB);

export { router };
