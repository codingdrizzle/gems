import { Schema, models, model } from 'mongoose';

const tokenSchema = Schema({
    creatorId: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    expireAt: {
        type: String,
        required: true
    }
})

const Token = models.Token || model('Token', tokenSchema);
export default Token