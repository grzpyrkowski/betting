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
    },
    {
        timestamps: true
    }
)

export const Team = mongoose.model("Team", TeamSchema);

