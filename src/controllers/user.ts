import { Request, Response, NextFunction } from "express";
import User from "../models/userModel";
import {
  createUser,
  findUsers,
  findAndUpdate,
  deleteUser,
} from "../service/userService";

const register = async (req: Request, res: Response, next: NextFunction) => {
  const user = await createUser({
    fname: req.body.fname,
    lname: req.body.lname,
    pass: req.body.pass
  });

  res.status(201).json({
    message: "User registered successfully",
    data: {
      user,
    },
  });
};

const findAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find();
  return res.status(200).json({
    data: users,
  });
};

const findSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await findUsers({
    _id: req.params.userID,
  });

  return res.status(200).json({
    data: user,
  });
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const newUser = await findAndUpdate(
    { _id: req.params.userID },
    { pass: req.body.pass },
    { new: true }
  );

  return res.status(200).json({
    data: newUser,
  });
};

const deleteUserfromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await deleteUser({
    _id: req.params.userID,
  });

  return res.status(200).json({
    message: "User Deleted successfully",
  });
};

export { register, findAllUsers, findSingleUser, updateUser, deleteUserfromDB };
