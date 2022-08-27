import mongoose from 'mongoose'
import Complaints from '../../models/complaintSchema'
const ObjectId = mongoose.Types.ObjectId


export default async function handleUsersRequests(req, res) {
    const { id } = req.query

    switch (req.method) {
        case 'GET':
            //Get a single complaint - route
            if (id) {
                try {
                    const complaint = await Complaints.find({ user: ObjectId(id) }).populate('user')
                    if(!complaint){     
                        res.status(200).json('No submissions found. ')
                    }
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