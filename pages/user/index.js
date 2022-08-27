import Head from 'next/head'
import axios from 'axios'
import React, { useEffect, useCallback } from 'react'
import UserHome from '../../components/user-dashboard/user-home'
import { useDispatch, useSelector } from 'react-redux'
import { getUserID } from '../../states/actions'
import { getSession } from "next-auth/react"



const UserHomePage = () => {

  const dispatcher = useDispatch()
  // getUser ID from redux store
  const { userID } = useSelector(state => state);

  // States
  // const [submissions, setSubmissions] = useState([])

  const retrieveUserID = useCallback(async () => await getSession().then(res => dispatcher(getUserID(res.user.id))), [dispatcher])

  useEffect(() => {
    retrieveUserID()
  }, [retrieveUserID])

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserHome />
    </>
  )
}

export default UserHomePage