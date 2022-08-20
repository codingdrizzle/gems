import mongoose from "mongoose";

const connect = async () => {
    mongoose.connect(
        'mongodb+srv://codingdrizzle:password123@cluster0.qtomywv.mongodb.net/?retryWrites=true&w=majority' || process.env.DATABASE_URL,
        {},
        () => {
            console.log('Connected to MongoDB');
        }
    )
    require('../models/agentSchema')
    require('../models/complaintSchema')
    require('../models/userSchema')
}
export default connect;