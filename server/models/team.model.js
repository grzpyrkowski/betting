import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        scores: {
            type: Array,
            required: false
        }
    }
)

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;