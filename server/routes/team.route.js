import express from "express";
import {createTeam, deleteTeam, getTeam, getTeams, updateTeam} from "../controllers/team.controller.js";
export const teamRouter = express.Router();

teamRouter.get('/', getTeams);
teamRouter.get('/:id', getTeam);
teamRouter.post('/', createTeam);
teamRouter.put('/:id', updateTeam);
teamRouter.delete('/:id', deleteTeam);