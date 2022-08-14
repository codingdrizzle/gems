import mongoose from "mongoose";

const connect = async () => {
    mongoose.connect(
        process.env.MONGODB_URL || process.env.DATABASE_URL,
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