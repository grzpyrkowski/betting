import {Users} from "../models/users.model.js";

export const getEverybodyUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const getUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await Users.findById(id);
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const createUsers = async (req, res) => {
    try {
        const users = await Users.create(req.body);
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const updateUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await Users.findByIdAndUpdate(id, req.body);
        if (!users) {
            return res.status(404).json({message: "Users pool doesn't exist"})
        } else {
            const updatedUsers = await Users.findById(id)
            res.status(200).json(updatedUsers);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

export const deleteUsers = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await Users.findByIdAndDelete(id);
        if (!users) {
            return res.status(404).json({message: "Users pool doesn't exist"})
        } else {
            res.status(200).json({message: "Users pool successfully deleted"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}