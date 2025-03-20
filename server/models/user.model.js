import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [2, "Username must be at least 2 characters long"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);
export default User;
