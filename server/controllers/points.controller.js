import {Points} from "../models/points.model.js";

export const getEverybodyPoints = async (req, res) => {
    try {
        const points = await Points.find({});
        res.status(200).json(points);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const getPoints = async (req, res) => {
    try {
        const {id} = req.params;
        const points = await Points.findById(id);
        res.status(200).json(points);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const createPoints = async (req, res) => {
    try {
        const points = await Points.create(req.body);
        res.status(200).json(points);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const updatePoints = async (req, res) => {
    try {
        const {id} = req.params;
        const points = await Points.findByIdAndUpdate(id, req.body);
        if (!points) {
            return res.status(404).json({message: "Points pool doesn't exist"})
        } else {
            const updatedPoints = await Points.findById(id)
            res.status(200).json(updatedPoints);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const deletePoints = async (req, res) => {
    try {
        const {id} = req.params;
        const points = await Points.findByIdAndDelete(id);
        if (!points) {
            return res.status(404).json({message: "Points pool doesn't exist"})
        } else {
            res.status(200).json({message: "Points pool successfully deleted"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}