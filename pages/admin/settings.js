import Head from 'next/head'
import React from 'react'
import Settings from '../../components/admin-dashboard/settings'

const SettingsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Settings</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Settings />
    </>
  )
}

export default SettingsPage