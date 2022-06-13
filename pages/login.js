import Head from 'next/head'
import React, { useState } from 'react'
import Login from '../components/login'
import Preloader from '../commons/preloader'

const LoginPage = () => {
  const [loading, setloading] = useState(true)

  setTimeout(() => {
    setloading(false)
  }, 1000);

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Preloader /> :
    <Login/>
    }
    </>
  )
}

export default LoginPage