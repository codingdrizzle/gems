import mongoose from 'mongoose'
import Complaints from '../../models/complaintSchema'
const ObjectId = mongoose.Types.ObjectId


export default async function handleUsersRequests(req, res) {
    const { id, cat } = req.query

    switch (req.method) {
        case 'GET':
            //Get a single complaint - route
            if (id) {
                try {
                    const complaint = await Complaints.findOne({ _id: ObjectId(id) }).populate('user').exec()
                    res.status(200).json(complaint)
                    res.setHeader({ ContentType: 'application/json' })

                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            } else if (cat) {
                // Get all complaints - route
                try {
                    const complaints = await Complaints.find({ category: cat }).populate('user').exec();
                    res.status(200).json(complaints)
                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            } else {
                res.status(500).json({ message: error.message })
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
                    res.status(400).json({ message: "No data to update." })
                }
                const complaint = await Complaints.where({ _id: ObjectId(id) }).updateOne(req.body)
                res.status(200).json(complaint).setHeader('Content-Type', 'application/json')
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
                const complaint = await Complaints.deleteOne({ _id: ObjectId(id) })
                res.status(200).json(complaint)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
        default:
            res.status(405).json("Not allowed")
    }
}