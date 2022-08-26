import Head from 'next/head'
import React, {useEffect} from 'react'
import UserHome from '../../components/user-dashboard/user-home'
import { useDispatch, useSelector } from 'react-redux'
import { getUserID } from '../../states/actions'
import { getSession } from "next-auth/react"



const UserHomePage = () => {

  const dispatcher = useDispatch()
  const { userID } = useSelector(state => state)

  useEffect(() => {
    const setUserID = async () => {
      const session = await getSession()
      dispatcher(getUserID(session.user.id))
    }
    setUserID()
  }, [])

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Home</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserHome/>
    </>
  )
}

export default UserHomePage