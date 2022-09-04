import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import User from '../../models/userSchema'
const ObjectId = mongoose.Types.ObjectId
/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 * @returns 
 */
async function handleUsersRequests(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                const count = await User.count()
                res.status(200).json(count)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
    }
}
export default handleUsersRequests
