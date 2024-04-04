import mongoose from "mongoose";

const BetSchema = new mongoose.Schema(
    {
        score: {
          type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        match_id: {
            type: String,
            required: true
        },
        user_id: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Bet = mongoose.model("Bet", BetSchema);

