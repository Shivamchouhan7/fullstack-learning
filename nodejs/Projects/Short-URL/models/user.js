const mongoose = require('mongoose');

const schema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true}//timestamps will automatically add createdAt and updatedAt fields to the schema
);

const User = mongoose.model('User', schema);
module.exports = User;