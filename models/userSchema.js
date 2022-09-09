import { Schema, models, model} from 'mongoose';
 
const userSchema =  Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now
    },
    complaints: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Complaints'
    }]

})

const User = models.Users || model('Users', userSchema);
export default User