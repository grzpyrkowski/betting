import express from "express";
import {getBets, getBet, createBet, updateBet, deleteBet} from "../controllers/bet.controller.js";
export const betRouter = express.Router();

betRouter.get('/', getBets);
betRouter.get('/:id', getBet);
betRouter.post('/', createBet);
betRouter.put('/:id', updateBet);
betRouter.delete('/:id', deleteBet);