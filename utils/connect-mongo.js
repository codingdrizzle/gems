import mongoose from "mongoose";

const connect = async () => mongoose.connect(process.env.MONGODB_URL || process.env.DATABASE_URL)

export default connect;