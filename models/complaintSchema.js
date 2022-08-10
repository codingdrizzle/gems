import { Schema, models, model } from 'mongoose'


const complaintSchema = Schema({
    category: {
        type: String,
        required: true
    }, 
    type: {
        type: String,
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    geoLocation: {
        type: Object,
        required: true
    },
    descLocation: {
        type: String,
        required: true
    },
    TnC: {
        type: Boolean,
        required: true    
    },
    resolved: {
        type: Boolean,
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'Users' }

})

const Complaints = models.Complaints || model('Complaints', complaintSchema)

export default Complaints