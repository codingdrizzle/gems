import React from "react";
import Head from "next/head";
import Complaints from "../../models/complaintSchema";
import Statistics from "../../components/admin-dashboard/statistics";

const StatisticsPage = ({ complaints }) => {
  if (!complaints) return <div>Error occurred</div>;
  return (
    <>
      <Head>
        <title title="Ghana Emergency Services">GEMS - Statistics</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Statistics complaints={JSON.parse(complaints)} />
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const res = await Complaints.find().populate("user").exec();
    const complaints = JSON.stringify(res);

    return {
      props: {
        complaints,
      },
      revalidate: 10,
    };
  } catch (error) {
    return null;
  }
}

export default StatisticsPage;
