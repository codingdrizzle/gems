import { useRouter, useState } from 'next/router'
import axios from 'axios'
import connect from '../../../utils/connect-mongo'
import mongoose from 'mongoose'
import Complaints from '../../../models/complaintSchema'
import React from 'react'
import Preview from '../../../components/admin-dashboard/complaints/complaints-previrew'
import Layout from '../../../layouts/admin-dashboard-layouts'
const ObjectId = mongoose.Types.ObjectId

const NotificationPreview = ({ complaints }) => {

  const data = JSON.parse(complaints)
  return (
    <Layout title={'Notification Preview'}>
      <Preview complaint={data}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  await connect()
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