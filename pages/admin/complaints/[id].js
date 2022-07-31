import React from 'react'
import Preview from '../../../components/admin-dashboard/complaints/complaints-previrew'
import Layout from '../../../layouts/admin-dashboard-layouts'

const NotificationPreview = () => {
  return (
    <Layout title={'Notification Preview'}>
        <Preview/>
    </Layout>
  )
}

export async function getStaticPaths(){
    return {
        paths: 'id',
        fallback: true
    }
}

export default NotificationPreview