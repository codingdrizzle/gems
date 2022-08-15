import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getComplaints} from '../../states/actions'
import connect from '../../utils/connect-mongo'
import Complaints from '../../models/complaintSchema'
import UserHome from '../../components/user-dashboard/user-home'

const UserHomePage = (props) => {
  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(getComplaints(JSON.parse(props.complaints)))
  }, [])

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserHome/>
    </>
  )
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

export default UserHomePage