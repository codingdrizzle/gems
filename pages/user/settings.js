import Head from 'next/head'
import React from 'react'
import Settings from '../../src/components/user-dashboard/user-settings'

const SettingsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Settings</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Settings/>
    </>
  )
}

export default SettingsPage