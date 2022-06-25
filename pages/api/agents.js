import mongoose from 'mongoose'
import Agent from '../../models/agentSchema'
import connect from '../../utils/connect-mongo'

const ObjectId = mongoose.Types.ObjectId

export default async function handleAgentRequests( req, res ){
    // Connect to mongoDB
    await connect()

    switch(req.method){
        case 'GET':
            const {id} = req.query
            if(id){
                // Get a single agent - route
                try{
                    const agent = await Agent.findById({_id : ObjectId(id)})
                    res.status(200).json(agent)
                } catch (error) { 
                    res.status(500).json({message: error.message})
                }
            }else{
                // Get all agents - route
                try{
                    const agent = await Agent.find()
                    res.status(200).json(agent)
                } catch(error){
                    res.status(500).json({message: error.message})
                }
            }
        break;
        case 'POST':
            // Create a new agent - route
            try{
                const newAgent = await Agent.create(req.body)
                res.status(200).json(newAgent)
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        break;
        case 'PATCH': 
        // Update an agent - route
        try{
            if(!req.body){
                res.status(400).json({ message: 'Bad request.'})
            }
            const { id } = req.query
            const agent = await Agent.where({_id : ObjectId(id)}).updateOne(req.body)
            res.status(200).json(agent)
        } catch (error) {
            res.status(500).json({ message : error.message})
        }
        break;
        case 'DELETE':
            // Delete an Agent
            try{
                const { id } = req.query
                if(!id){
                    res.status(400).json({ message : 'Bad request'})
                }
                const agent = await Agent.deleteOne({ _id : ObjectId(id)})
                res.status(200).json(agent)
            } catch (error) {
                res.status(500).json({ message : error.message })
            }
        break;
    }
}