import { getAllUsers, getUser, newUser, updateUser, deleteUser } from "../../prisma/user";

export default async function handleUsersRequests(req, res) {
    switch (req.method) {
        case 'GET': {
            try {
                if (req.query.id) {
                    const user = await getUser(req.query.id)
                    return res.status(200).json(user)
                } else {
                    const users = await getAllUsers()
                    return res.status(200).json(users)
                }
            } catch (err) {
                return res.status(500).json(...err, { message: err.message })
            }
        }
        case 'POST': {
            try {
                const { firstname, lastname, email, username, password, contact, complaints } = req.body
                const user = await newUser(firstname, lastname, email, username, password, contact, complaints)
                return res.status(200).json(user)
            } catch (err) {
                return res.status(401).json({ message: err.message })
            }

        }
        case 'PUT': {
            try {
                const { id, updateData } = req.body
                const user = await updateUser(id, updateData)
                return res.status(201).json(user)
            } catch (err) {
                return res.status(400).json(...err, { message: err.message })
            }
        }
        case 'DELETE': {
            try {
                const { id } = req.body
                const user = await deleteUser(id)
                return res.status(200).json(user)
            } catch (err) {
                res.status(500).json({ message: err.message })
            }
        }
    }
}