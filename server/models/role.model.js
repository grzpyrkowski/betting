import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true]
        }
    }
);

export const Role = mongoose.model("Role", RoleSchema);