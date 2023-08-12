import React from 'react'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import Content from './content'
import PageFooter from '../../footer/index'

const list = ['Home', 'Notifications', 'Tips', 'Settings']

const UserHomePage = () => {
  return (
    <Layout footer={<PageFooter company={{ title: 'GEMS', list: list }} />} active={'home'}>
        <Content/>
    </Layout>
  )
}

export default UserHomePage