import React from 'react'
import Head from 'next/head'
import Statistics from '../../components/admin-dashboard/statistics'

const StatisticsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Statistics</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Statistics/>
    </>
  )
}

export default StatisticsPage