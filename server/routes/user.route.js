import express from "express";
import {createUser, deleteUser, getUser, getUsers, updateUser} from "../controllers/user.controller.js";
export const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);