import express from "express";
import {getPoints, getEverybodyPoints, createPoints, updatePoints, deletePoints} from "../controllers/points.controller.js";
export const pointsRouter = express.Router();

pointsRouter.get('/', getEverybodyPoints);
pointsRouter.get('/:id', getPoints);
pointsRouter.post('/', createPoints);
pointsRouter.put('/:id', updatePoints);
pointsRouter.delete('/:id', deletePoints);