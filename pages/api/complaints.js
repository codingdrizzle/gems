import mongoose from 'mongoose'
import Complaints from '../../models/complaintSchema'
import connect from '../../utils/connect-mongo'
const ObjectId = mongoose.Types.ObjectId


export default async function handleUsersRequests(req, res) {
    // Connect to mongoDB 
    await connect()
    const { id, type } = req.query

    switch (req.method) {
        case 'GET':
            //Get a single complaint - route
            if (id && type) {
                try {
                    const complaint = await Complaints.findOne({ _id: ObjectId(id) }).populate('user')
                    res.status(200).json(complaint)
                    res.setHeader({ ContentType: 'application/json' })

                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            }
            else if (id) {
                try {
                    const complaint = await Complaints.find({ user: ObjectId(id) }).populate('user')
                    res.status(200).json(complaint)
                    res.setHeader({ ContentType: 'application/json' })

                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            }
            else {
                // Get all complaints - route
                try {
                    const complaints = await Complaints.find().populate('user').exec();
                    res.status(200).json(complaints)
                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            }
            break;

        case 'POST':
            // Create a new complaint - route
            try {

                if (!id) {
                    res.status(400).json({ message: "Bad request." })
                }
                const complaint = await Complaints.create({ user: ObjectId(id), ...req.body })
                res.status(200).json(complaint)
            } catch (error) {
                res.status(400).json({ message: error })
            }
            break;
        case 'PATCH':
            // Update a user - route
            try {
                if (!req.body) {
                    res.status(400).json({ message: "Not not not" })
                }
                const user = await User.where({ _id: ObjectId(id) }).updateOne(req.body)
                res.status(200).json(user).setHeader('Content-Type', 'application/json')
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
        case 'DELETE':
            // Delete a user = route
            try {
                if (!id) {
                    res.status(400).json({ message: "Bad request" })
                }
                const user = await User.deleteOne({ _id: ObjectId(id) })
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
        default:
            res.status(405).json("Not allowed")
    }
}