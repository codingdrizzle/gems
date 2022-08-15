import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Divider, Skeleton, message } from 'antd'
import Layout from '../../../layouts/admin-dashboard-layouts';
import AlertCard from './complaints';

const Notification = ({complaints}) => {
    return (
        <Layout title={'Complaints'}>
            <AlertCard complaints={complaints}/>    
        </Layout>
    );
}

export default Notification