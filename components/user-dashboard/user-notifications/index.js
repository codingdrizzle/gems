import React, { useState, useEffect } from 'react'
import { FaBell, FaCheck } from 'react-icons/fa'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import styles from '../../../styles/user-styles/user-notification/notification-card.module.css'
import NotificationCard from './card'
import Preloader from './skeleton'
import {date} from '../../../helpers/get-date'

const Notifications = () => {
  const [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   setLoaded(!loaded)
  // }, [])

  return (
    <Layout>
      {
        loaded ?
          <Preloader /> :
          <NotificationCard 
            caption={'Unread'} 
            captionIcon={<FaBell/>}
            count={4}
            bgColor={styles.danger}
            borderColor={styles.danger}
            title={'New Message'} 
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque sit amet turpis condimentum tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis '} 
            dateStamp={date}/>
        }
    </Layout>
  )
}

export default Notifications