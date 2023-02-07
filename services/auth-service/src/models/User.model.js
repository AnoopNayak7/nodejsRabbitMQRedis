import mongoose from 'mongoose'
// import {  } from '../../server.js'
const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["Point"],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        trim: true
    },
    lastLocation: {
        type: pointSchema,
        default: {
            type: "Point",
            coordinates: [0, 0],
        },
        index: "2dsphere"
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

export default User