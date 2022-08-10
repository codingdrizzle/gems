import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import Agent from '../../models/agentSchema'
import connect from '../../utils/connect-mongo'

const ObjectId = mongoose.Types.ObjectId

export default async function handleAgentRequests(req, res) {
    // Connect to mongoDB
    await connect()

    switch (req.method) {
        case 'GET':
            // Get all agents - route
            try {
                const agent = await Agent.find()
                res.status(200).json(agent)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
        case 'POST':
            // Create a new agent - route
            try {
                if (!req.body) {
                    res.status(400).json({ message: "Bad request." })
                }
                const existAgent = await Agent.findOne({ contact: req.body.contact })
                if (existAgent) {
                    res.status(200).json({ message: 'Agent already exist' })
                } else {
                    bcrypt.hash(req.body.id, 10).then(async (hash) => {
                        req.body.id = hash
                        await Agent.create(req.body)
                        res.status(201).json({ message: `Agent account ${req.body.name} created.` })
                    })
                }
            } catch (error) {
                res.status(400).json({ message: error.message })
            }
            break;
        case 'PATCH':
            // Update an agent - route
            try {
                if (!req.body) {
                    res.status(400).json({ message: 'Bad request.' })
                }
                const { id } = req.query
                const agent = await Agent.where({ _id: ObjectId(id) }).updateOne(req.body);
                res.status(200).json(agent, {message: 'Agent details updated successfully.'})
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
        case 'DELETE':
            // Delete an Agent
            try {
                const { id } = req.query
                if (!id) {
                    res.status(400).json({ message: 'Bad request' })
                }
                const agent = await Agent.deleteOne({ _id: ObjectId(id) })
                res.status(200).json(agent)
            } catch (error) {
                res.status(500).json({ message: error.message })
            }
            break;
    }
}