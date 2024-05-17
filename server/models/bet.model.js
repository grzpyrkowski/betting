import mongoose from "mongoose";

const BetSchema = new mongoose.Schema(
    {
        scoreA: {
          type: Number,
            required: true
        },
        scoreB: {
          type: Number,
            required: true
        },
        points_value: {
            type: Number,
            required: true
        },
        match_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Match",
            required: true
        },
        user_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Bet = mongoose.model("Bet", BetSchema);

