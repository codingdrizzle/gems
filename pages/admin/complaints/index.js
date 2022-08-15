import React from 'react'
import connect from '../../../utils/connect-mongo'
import Complaints from '../../../models/complaintSchema';
import Notification from '../../../components/admin-dashboard/complaints';

const NotificationPage = ({complaints}) => {
    console.log(JSON.parse(complaints))
    return (
        <Notification complaints={JSON.parse(complaints)}/>
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