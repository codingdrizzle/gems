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
                       return  res.status(200).json('No submissions found. ')
                    }
                    return res.status(200).json(complaint)
                    return res.setHeader({ ContentType: 'application/json' })

                } catch (error) {
                    return res.status(500).json({ message: error.message })
                }
            } else{
                return res.status(405).json('Not allowed.')
            }
        default:
           return res.status(405).json("Not allowed")
    }
}