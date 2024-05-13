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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Match",
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Bet = mongoose.model("Bet", BetSchema);

