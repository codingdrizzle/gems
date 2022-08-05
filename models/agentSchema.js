import mongoose from 'mongoose';


const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    }
})

const Agent = mongoose.models.Agent || mongoose.model('Agent', agentSchema);

export default Agent