import Head from 'next/head'
import React from 'react'
import Tips from '../../components/user-dashboard/user-tips'

const TipsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Tips</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tips />
    </>
  )
}

export default TipsPage