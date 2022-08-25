import Head from 'next/head'
import React from 'react'
// import Complaints from '../../models/complaintSchema'
import Submissions from '../../components/user-dashboard/user-submissions'

const SubmissionsPage = () => {
  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS - Submissions</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Submissions/>
    </>
  )
}
 
// export async function getStaticProps(context) {
//   const res = await Complaints.find().populate('user').exec()
//   const complaints = JSON.stringify(res)

//   return {
//     props: {
//       complaints
//     },
//     revalidate: 10
//   }
// }

export default SubmissionsPage