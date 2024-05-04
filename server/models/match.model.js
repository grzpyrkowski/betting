import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        teams: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Match = mongoose.model("Match", MatchSchema);
