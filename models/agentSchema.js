import mongoose from 'mongoose';


const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    contact: {
        type:  Number,
        required: true
    }
})

const Agent = mongoose.models.Agent || mongoose.model('Agent', agentSchema);

export default Agent