import { useRouter, useEffect } from 'next/router'
import axios from 'axios'
import React from 'react'
import Preview from '../../../components/admin-dashboard/complaints/complaints-previrew'
import Layout from '../../../layouts/admin-dashboard-layouts'

const NotificationPreview = (props) => {
  
  return (
    <Layout title={'Notification Preview'}>
        <Preview/>
        {props.content}
    </Layout>
  )
}

export async function getStaticPaths() {
  const results = await axios.get('/api/complaints')
  const ids = await results.data

  return {
    paths: ids.map((item) => ({
      params: {id : item._id.toString()}
    })),
    fallback: false, // can also be true or 'blocking'
  }
}


export async function getStaticProps(context) {
  const id = context.params.id

  const res = await axios.get(`/api/complaints?id=${id}`)
  const posts = await res.data

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    },
  }
}

export default NotificationPreview