import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Divider, Skeleton, message } from 'antd'
import Layout from '../../../layouts/admin-dashboard-layouts';
import AlertCard from './complaints';

const Notification = () => {
    return (
        <Layout title={'Complaints'}>
            <AlertCard/>    
        </Layout>
    );
}

export default Notification