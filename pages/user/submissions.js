import Head from 'next/head'
import React, {useEffect, useState} from 'react'
import { message } from 'antd'
import { useSelector } from 'react-redux'
import axios from 'axios' 
import Submissions from '../../components/user-dashboard/user-submissions'

const SubmissionsPage = () => {
  // getUser ID from redux store
  const { userID } = useSelector(state => state)
  
  // States
  const [ submissions, setSubmissions] = useState([])

  useEffect(() => {
      try {
        axios.get(`/api/submissions/?id=${userID}`)
        .then(res => {
          setSubmissions(res.data)
        })
      } catch (error) {
        message.error('Could not fetch submissions.')
      }
  }, [])
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Submissions</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Submissions submissions={submissions}/>
    </>
  )
}


export default SubmissionsPage