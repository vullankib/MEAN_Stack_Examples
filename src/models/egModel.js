import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const egSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a Last Name'
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});