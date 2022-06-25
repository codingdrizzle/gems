import mongoose from 'mongoose'
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
            const { id } = req.query
            //Get a single user - route
            if (id) {
                try {
                    const user = await User.findOne({ _id: ObjectId(id) })
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
                    const users = await User.find();
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
                const user = await User.create(req.body)
                res.status(200).json(user)
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








// export default async function handleUsersRequests(req, res) {


//     switch (req.method) {
//         case 'GET': {
//             try {
//                 if (req.query.id) {
//                     const user = await User.findById({id: req.query.id})
//                     return res.status(200).json(user)
//                 } else {
//                     const users = await User.find()
//                     return res.status(200).json(users)
//                 }
//             } catch (err) {
//                 return res.status(500).json({ message: err.message })
//             }
//         }
//         case 'POST': {
//             try {
//                 const { firstname, lastname, email, username, password, contact, complaints } = req.body
//                 const user = await User.insertMany({ firstname, lastname, email, username, password, contact, complaints })
//                 return res.status(200).json(user)
//             } catch (err) {
//                 return res.status(401).json({ message: err.message })
//             }

//         }
//         case 'PUT': {
//             try {
//                 const { id, updateData } = req.body
//                 const user = await User.updateOne({ id: id},{updateData })
//                 return res.status(201).json(user)
//             } catch (err) {
//                 return res.status(400).json({ message: err.message })
//             }
//         }
//         case 'DELETE': {
//             try {
//                 const { id } = req.body
//                 if(User.findById({id})){
//                     const user = await User.deleteOne({ id })
//                     return res.status(200).json(user)
//                 }else{
//                     return res.status(400).json({"no":"body"})
//                 }
//             } catch (err) {
//                 res.status(500).json({ message: err.message })
//             }
//         }
//     }
// }
