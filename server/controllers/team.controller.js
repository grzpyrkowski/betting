import {Team} from "../models/team.model.js";

export const getTeams = async (req, res) => {
    try {
        const teams = await Team.find({});
        res.status(200).json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const getTeam = async (req, res) => {
    try {
        const {id} = req.params;
        const team = await Team.findById(id);
        res.status(200).json(team);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const createTeam = async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(200).json(team);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const updateTeam = async (req, res) => {
    try {
        const {id} = req.params;
        const team = await Team.findByIdAndUpdate(id, req.body);
        if (!team) {
            return res.status(404).json({message: "Team doesn't exist"})
        } else {
            const updatedTeam = await Team.findById(id)
            res.status(200).json(updatedTeam);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const deleteTeam = async (req, res) => {
    try {
        const {id} = req.params;
        const team = await Team.findByIdAndDelete(id);
        if (!team) {
            return res.status(404).json({message: "Team doesn't exist"})
        } else {
            res.status(200).json({message: "Team successfully deleted"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}