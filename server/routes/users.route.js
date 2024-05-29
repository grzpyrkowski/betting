import express from "express";
import {getUsers, getEverybodyUsers, createUsers, updateUsers, deleteUsers} from "../controllers/users.controller.js";
export const usersRouter = express.Router();

usersRouter.get('/', getEverybodyUsers);
usersRouter.get('/:id', getUsers);
usersRouter.post('/', createUsers);
usersRouter.put('/:id', updateUsers);
usersRouter.delete('/:id', deleteUsers);