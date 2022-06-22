import mongoose from 'mongoose';
 
const userSchema =  new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    complaints: {
        type: Array,
        required: true
    }
})

module.exports =mongoose.models.Users || mongoose.model('Users', userSchema);