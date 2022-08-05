import Head from 'next/head'
import React from 'react'
import Notifications from '../../components/user-dashboard/user-notifications'

const NotificationsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Notification</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Notifications/>
    </>
  )
}

export default NotificationsPage