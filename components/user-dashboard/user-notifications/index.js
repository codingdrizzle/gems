import React, { useState, useEffect } from 'react'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import styles from '../../../styles/user-styles/user-notification/notification-card.module.css'
import NotificationCard from './card'
import Preloader from './skeleton'

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
          <NotificationCard borderColor={styles.warning} title={'New Message'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis neque sit amet turpis condimentum tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis '} timestamp={'Mon, 02/12/2022'}/>
        }
    </Layout>
  )
}

export default Notifications