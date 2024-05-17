import mongoose from "mongoose";

const PointsSchema = new mongoose.Schema(
    {
        amount: {
          type: Number,
            required: true
        },
        bet_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bet",
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

export const Points = mongoose.model("Bet", PointsSchema);

