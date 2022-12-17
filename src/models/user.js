import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    nombre: String,
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

export const UserModel = mongoose.model(usersCollection, userSchema);