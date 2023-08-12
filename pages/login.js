import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Login from '../src/components/login'
import Preloader from '../src/commons/preloader'

const LoginPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Preloader /> : <Login/>}
    </>
  )
}

export default LoginPage