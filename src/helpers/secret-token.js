import { nanoid } from 'nanoid';

export async function createToken({ creatorId, type, expireAt }) {
    const securedTokenId = nanoid(32);
    const token = {
        _id: securedTokenId,
        creatorId,
        type,
        expireAt,
    };
    return token;
}
