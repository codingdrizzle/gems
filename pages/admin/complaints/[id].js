import Head from 'next/head'
import React from 'react'
import mongoose from 'mongoose'
import Complaints from '../../../models/complaintSchema'
import Preview from '../../../components/admin-dashboard/complaints/complaints-previrew'
import Layout from '../../../layouts/admin-dashboard-layouts'
const ObjectId = mongoose.Types.ObjectId

const NotificationPreview = ({ complaints }) => {

  const data = JSON.parse(complaints)
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - ID-Complaint</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout title={'Complaint Preview'}>
      <Preview complaint={data}/>
    </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const ids = await Complaints.find().exec()

  return {
    paths: ids.map((item) => ({
      params: { id: item._id.toString() }
    })),
    fallback: false,
  }
}


export async function getStaticProps(context) {
  await connect()
  const id = context.params.id

  const res = await Complaints.findOne({ _id: ObjectId(id) }).populate('user').exec()
  const complaints = JSON.stringify(res)

  return {
    props: {
      complaints
    },
    revalidate: 10
  }
}

export default NotificationPreview