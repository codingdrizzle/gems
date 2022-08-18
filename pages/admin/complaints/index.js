import Head from 'next/head'
import React from 'react'
import connect from '../../../utils/connect-mongo'
import Complaints from '../../../models/complaintSchema';
import Notification from '../../../components/admin-dashboard/complaints';

const NotificationPage = ({ complaints }) => {
    return (
        <>
            <Head>
                <title title='Ghana Emergency Services'>GEMS - Complaints</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Notification complaints={JSON.parse(complaints)} />
        </>
    );
}

export async function getStaticProps(context) {
    await connect()

    const res = await Complaints.find().populate('user').exec()
    const complaints = JSON.stringify(res)

    return {
        props: {
            complaints
        },
        revalidate: 10
    }
}


export default NotificationPage