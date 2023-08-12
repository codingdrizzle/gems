import Head from 'next/head'
import React, {useEffect, useState} from 'react'
import { message } from 'antd'
import { useSelector } from 'react-redux'
import axios from 'axios' 
import Submissions from '../../src/components/user-dashboard/user-submissions'

const SubmissionsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Submissions</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Submissions/>
    </>
  )
}


export default SubmissionsPage