import {Bet} from "../models/bet.model.js";

export const getBets = async (req, res) => {
    try {
        const bet = await Bet.find({});
        res.status(200).json(bet);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const getBet = async (req, res) => {
    try {
        const {id} = req.params;
        const bet = await Bet.findById(id);
        res.status(200).json(bet);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const createBet = async (req, res) => {
    try {
        const bet = await Bet.create(req.body);
        res.status(200).json(bet);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const updateBet = async (req, res) => {
    try {
        const {id} = req.params;
        const bet = await Bet.findByIdAndUpdate(id, req.body);
        if (!bet) {
            return res.status(404).json({message: "Bet doesn't exist"})
        } else {
            const updatedBet = await Bet.findById(id)
            res.status(200).json(updatedBet);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const deleteBet = async (req, res) => {
    try {
        const {id} = req.params;
        const bet = await Bet.findByIdAndDelete(id);
        if (!bet) {
            return res.status(404).json({message: "Bet doesn't exist"})
        } else {
            res.status(200).json({message: "Bet successfully deleted"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}