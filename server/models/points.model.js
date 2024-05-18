import mongoose from "mongoose";

const PointsSchema = new mongoose.Schema(
    {
        amount: {
          type: Number,
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

export const Points = mongoose.model("Points", PointsSchema);