import React from 'react'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import PageFooter from '../../footer'
import TipsCard from './card'
const list = ['Home', 'Notifications', 'Tips', 'Settings']



const Tips = () => {
  return (
    <Layout footer={< PageFooter company={{ title: 'GEMS', list: list }} />}>
      <TipsCard/>
    </Layout>
  )
}

export default Tips