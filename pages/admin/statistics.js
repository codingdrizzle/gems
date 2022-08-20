import React from 'react'
import Head from 'next/head'
import connect from '../../utils/connect-mongo'
import Complaints from '../../models/complaintSchema';

import Statistics from '../../components/admin-dashboard/statistics'

const StatisticsPage = ({complaints}) => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Statistics</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Statistics complaints={JSON.parse(complaints)}/>
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

export default StatisticsPage