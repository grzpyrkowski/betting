import {Match} from "../models/match.model.js";

export const getMatches = async (req, res) => {
    try {
        const matches = await Match.find({});
        res.status(200).json(matches);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const getMatch = async (req, res) => {
    try {
        const {id} = req.params;
        const match = await Match.findById(id);
        res.status(200).json(match);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const createMatch = async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(200).json(match);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const updateMatch = async (req, res) => {
    try {
        const {id} = req.params;
        const match = await Match.findByIdAndUpdate(id, req.body);
        if (!match) {
            return res.status(404).json({message: "Match doesn't exist"})
        } else {
            const updatedMatch = await Match.findById(id)
            res.status(200).json(updatedMatch);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const deleteMatch = async (req, res) => {
    try {
        const {id} = req.params;
        const match = await Match.findByIdAndDelete(id);
        if (!match) {
            return res.status(404).json({message: "Match doesn't exist"})
        } else {
            res.status(200).json({message: "Match successfully deleted"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}