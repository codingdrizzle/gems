import Head from 'next/head'
import React from 'react'
import UserHome from '../../components/user-dashboard/user-home'

const UserHomePage = () => {

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

export default UserHomePage