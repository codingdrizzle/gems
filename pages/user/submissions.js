import Head from 'next/head'
import React from 'react'
import Submissions from '../../components/user-dashboard/user-submissions'

const SubmissionsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Submissions</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Submissions/>
    </>
  )
}

export default SubmissionsPage