import React from 'react'
import Head from 'next/head'
import Home from '../../components/admin-dashboard/home'

const AdminHomePage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Admin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}

export default AdminHomePage