import mongoose from 'mongoose'
import cloudinary from 'cloudinary'
import Complaints from '../../models/complaintSchema'
import connect from '../../utils/connect-mongo'
const ObjectId = mongoose.Types.ObjectId

cloudinary.config({
    cloud_name: 'dxclgkewn',
    api_key: '268165714611856',
    api_secret: 'XztvrLu5H1irDym1EpdICqpmOrc',
    secure: true
});

export default async function handleUsersRequests(req, res) {
    // Connect to mongoDB 
    await connect()

    switch (req.method) {
        case 'GET':
            const { id } = req.query
            //Get a single complaint - route
            if (id) {
                try {
                    const complaint = await Complaints.findOne({ _id: ObjectId(id) }).populate('user')
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
                const { id } = req.query
                const { title, description } = req.body
                if (!req.body || !id) {
                    res.status(400).json({ message: "Bad request." })
                }
                const complaint = await Complaints.create({user: ObjectId(id), title: title, description: description})
                res.status(200).json(complaint)
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;
        case 'PATCH':
            // Update a user - route
            try {
                if (!req.body) {
                    res.status(400).json({ message: "Bad Request" })
                }
                const { id } = req.query
                const user = await User.where({ _id: ObjectId(id) }).updateOne(req.body)
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
        case 'DELETE':
            // Delete a user = route
            try {
                const { id } = req.query
                if (!id) {
                    res.status(400).json({ message: "Bad request" })
                }
                const user = await User.deleteOne({ _id: ObjectId(id) })
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
    }
}