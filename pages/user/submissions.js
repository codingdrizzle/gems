import Head from 'next/head'
import React, {useEffect, useState} from 'react'
import { message } from 'antd'
import { getComplaints } from '../../states/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getSession } from 'next-auth/react'
import axios from 'axios' 
import Submissions from '../../components/user-dashboard/user-submissions'

const SubmissionsPage = () => {
  // instanciate dispatch
  const dispatcher = useDispatch()
  
  const { submissions } = useSelector(state => state)

  // States
  const [id, setId] = useState('')

  useEffect(() => {
    
    
    const fetchData = async () => {
      // get session
        await getSession().then((res) => {
          setId(res.user.id)
          console.log(id)
        })
      try {
        axios.get('/api/submissions/?id='+id)
        .then(res => {
          dispatcher(getComplaints(res.data))
        })
        // console.log(submissions)
      } catch (error) {
        message.error('Could not fetch submission.')
      }
    }
    fetchData()
  }, [])
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