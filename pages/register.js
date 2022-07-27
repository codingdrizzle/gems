import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import SignUp from '../components/register'
import Preloader from '../commons/preloader'

const SignUpPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Register</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Preloader /> :
        <SignUp />
      }
    </>
  )
}

export default SignUpPage