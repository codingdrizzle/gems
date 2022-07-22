import { Schema, models, model } from 'mongoose'


const complaintSchema = Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'Users' }

})

const Complaints = models.Complaints || model('Complaints', complaintSchema)

export default Complaints