import React from 'react'
import Head from 'next/head'
import Complaints from '../../models/complaintSchema';
import Users from '../../models/userSchema';
import Home from '../../components/admin-dashboard/home'

const AdminHomePage = ({complaints, users}) => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Admin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home users={JSON.parse(users)} complaints={JSON.parse(complaints)}/>
    </>
  )
}

export async function getStaticProps(context) {
  const data1 = await Complaints.find().populate('user').exec()
  const complaints = JSON.stringify(data1)

  const data2 = await Users.find().exec()
  const users = JSON.stringify(data2)

  return {
    props: {
      complaints,
      users
    },
    revalidate: 10
  }
}

export default AdminHomePage