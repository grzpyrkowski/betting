import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the nickname"]
        },
        password: {
            type: String,
            required: [true, "Please enter the password"]
        },
        email: {
            type: String,
            required: [true, "Please enter the email"]
        },
        points: {
            type: Number,
            required: true,
            default: 50
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Role"
        },
        rank: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", UserSchema);