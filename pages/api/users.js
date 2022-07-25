import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import User from '../../models/userSchema'
import connect from '../../utils/connect-mongo'
const ObjectId = mongoose.Types.ObjectId
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 * @returns 
 */

export default async function handleUsersRequests(req, res) {
    // Connect to mongoDB 
    await connect()

    switch (req.method) {
        case 'GET':
            const { username, password } = req.query
            //Get a single user - route
            if (username && password) {
                try {
                    const user = await User.findOne({ username: username, password: password })
                    res.status(200).json(user)
                    res.setHeader({ ContentType: 'application/json' })
                    // Query example --- http://localhost:3000/api/user/?id=62b48ffc8f11e7a2a521d18a

                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            }
            else {
                // Get all users - route
                try {
                    const users = await User.find().populate('complaints').exec();
                    res.status(200).json(users)
                } catch (error) {
                    res.status(500).json({ message: error.message })
                }
            }
            break;

        case 'POST':
            // Create a new user - route
            try {
                if (!req.body) {
                    res.status(400).json({ message: "Bad request." })
                }
                const existUser = await User.findOne({ email: req.body.email })
                console.log(existUser)
                if (existUser) {
                    res.status(200).json({ exist: 'User already exist' })
                } else {
                    await bcrypt.hash(req.body.password, 10).then((hash) => {
                        req.body.password = hash
                        User.create(req.body)
                        res.status(200).json({created: 'You have successfully created your account.'})
                    })
                }
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