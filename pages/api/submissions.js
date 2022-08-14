import mongoose from 'mongoose'
import Complaints from '../../models/complaintSchema'
import connect from '../../utils/connect-mongo'
const ObjectId = mongoose.Types.ObjectId


export default async function handleUsersRequests(req, res) {
    // Connect to mongoDB 
    await connect()
    const { id } = req.query

    switch (req.method) {
        case 'GET':
            //Get a single complaint - route
            if (id) {

                try {
                    const complaint = await Complaints.find({ user: ObjectId(id) }).populate('user')
                    res.status(200).json(complaint)
                    res.setHeader({ ContentType: 'application/json' })

                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            }
        default:
            res.status(405).json("Not allowed")
    }
}