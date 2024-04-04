import express from "express";
import {getMatches, getMatch, createMatch, updateMatch, deleteMatch } from "../controllers/match.controller.js";
export const matchRouter = express.Router();

matchRouter.get('/', getMatches);
matchRouter.get('/:id', getMatch);
matchRouter.post('/', createMatch);
matchRouter.put('/:id', updateMatch);
matchRouter.delete('/:id', deleteMatch);