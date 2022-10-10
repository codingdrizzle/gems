import mongoose from 'mongoose'
import axios from 'axios'
import { createToken } from '../../helpers/secret-token'
import Token from '../../models/tokenSchema'


export default async function Verify(req, res) {
    const { _id, email, firstname } = req.body
    switch (req.method) {
        case 'POST':
            if (!email) {
                res.json(401).end();
                return;
            }

            const token = await createToken({
                creatorId: _id,
                type: 'emailVerify',
                expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
            });

            res.json(token)
            if(token) await Token.create(token)          



            await sendMail({
                to: email,
                from: process.env.GMAIL_ADDRESS,
                subject: `Verification Email for ${process.env.WEB_URI}`,
                html: `
                    <div>
                        <p>Hello, ${firstname}</p>
                        <p>Please follow <a href="${process.env.WEB_URI}/verify-email/${token._id}">this link</a> to confirm your email.</p>
                    </div>
                    `,
            });

    }

}