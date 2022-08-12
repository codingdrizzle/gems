import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Divider, Skeleton, message } from 'antd'
import Layout from '../../../layouts/admin-dashboard-layouts';
import AlertCard from './complaints';

const Notification = () => {
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState('')
    const [data, setData] = useState([])

    let count = 0

    useEffect(() => {
        setLoading(false)
        axios.get('/api/complaints')
            .then(res => setData(res.data))
            .catch(err => message.err)
    }, [])
    for (let i = 0; i < data.length; i++) {
        if (data[i].resolved) {
            count++
        }
    }
    return (
        <Layout title={'Complaints'} count={count}>
            {
                loading ?
                    <Skeleton active style={{ marginTop: 50 }} /> :
                    <Row gutter={[10, 20]} justify='center' align='middle' style={{ marginBottom: 50, width: '100%' }}>
                        <Col xs={24}>
                            <Divider orientation='center' style={{ width: '20%' }}>Unread</Divider>
                            {
                                data.map((item, index) => {
                                    return item.resolved ?
                                        <AlertCard key={index} type={'unread'}>
                                            {item.content}
                                        </AlertCard> : ''
                                })
                            }
                        </Col>
                        <Col xs={24}>
                            <Divider orientation='center' style={{ width: '20%' }}>Read</Divider>
                            {
                                data.map((item, index) => {
                                    return !item.resolved ?
                                        <AlertCard key={index} type={'read'}>
                                            {item.content}
                                        </AlertCard> : ''
                                })
                            }
                        </Col>
                    </Row>
            }
        </Layout>
    );
}

export default Notification