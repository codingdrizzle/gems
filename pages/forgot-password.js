import Head from 'next/head'
import React, { useState } from 'react'
import RecoverPassword from '../components/recover-password'
import Preloader from '../commons/preloader'

const RecoverPage = () => {
  const [loading, setloading] = useState(true)

  setTimeout(() => {
    setloading(false)
  }, 1000);

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Forgot Password</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Preloader /> :
    <RecoverPassword/>
    }
    </>
  )
}

export default RecoverPage