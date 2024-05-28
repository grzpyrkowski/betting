import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        username: {
          type: String,
            required: true
        },
        kinde_user_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Users = mongoose.model("Users", UsersSchema);