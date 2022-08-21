import Head from 'next/head'
import React, { useEffect } from 'react'
import Agent from '../../models/agentSchema';
import Settings from '../../components/admin-dashboard/settings'

const SettingsPage = ({ agents }) => {
  useEffect(() => {

  }, [agents])
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Settings</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Settings agents={JSON.parse(agents)} />
    </>
  )
}

export async function getStaticProps(context) {
  const res = await Agent.find().exec()
  const agents = JSON.stringify(res)

  return {
    props: {
      agents
    },
    revalidate: 1
  }
}

export default SettingsPage