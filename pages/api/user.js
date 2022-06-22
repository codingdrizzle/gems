const mongoose = require('mongoose')
const User = require('../../database/models')


mongoose.connect('mongodb://localhost:27017/GEMS')
    .then(() => console.log("Database connected"))
    .catch(err => console.error(err))
// .finally(() => mongoose.connection.close())

export default async function handleUsersRequests(req, res) {
    switch (req.method) {
        case 'GET': {
            try {
                if (req.query.id) {
                    const user = await User.findById({id: req.query.id})
                    return res.status(200).json(user)
                } else {
                    const users = await User.find()
                    return res.status(200).json(users)
                }
            } catch (err) {
                return res.status(500).json({ message: err.message })
            }
        }
        case 'POST': {
            try {
                const { firstname, lastname, email, username, password, contact, complaints } = req.body
                const user = await User.insertMany({ firstname, lastname, email, username, password, contact, complaints })
                return res.status(200).json(user)
            } catch (err) {
                return res.status(401).json({ message: err.message })
            }

        }
        case 'PUT': {
            try {
                const { id, updateData } = req.body
                const user = await User.updateOne({ id: id},{updateData })
                return res.status(201).json(user)
            } catch (err) {
                return res.status(400).json({ message: err.message })
            }
        }
        case 'DELETE': {
            try {
                const { id } = req.body
                if(User.findById({id})){
                    const user = await User.deleteOne({ id })
                    return res.status(200).json(user)
                }else{
                    return res.status(400).json({"no":"body"})
                }
            } catch (err) {
                res.status(500).json({ message: err.message })
            }
        }
    }
}
