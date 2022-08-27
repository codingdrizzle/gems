import { useRouter } from 'next/router'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getComplaints } from '../../../states/actions'
import React, { useEffect, useState, useCallback } from 'react'
import { Row, Col, Skeleton, Typography, message } from 'antd'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import SubmissionCard from './card'

const { Title } = Typography

const Submissions = () => {

    const dispatcher = useDispatch()

    // useRouter
    const router = useRouter()
    //useState
    const [loading, setLoading] = useState(true)

    // getUser ID from redux store
    const { userID, submissions } = useSelector(state => state)

    const fetch = useCallback(async () => await axios.get(`/api/submissions/?id=${userID}`)
        .then(res => dispatcher(getComplaints(res.data)))
        .catch(err => message.error('Could not fetch submissions.'))
        , [dispatcher, userID])

    useEffect(() => {
        console.log('Called useEffect.')
        fetch()
        setLoading(false)
    }, [fetch])

    return (
        <Layout active={'home'}>
            {
                loading ? <Row><Col span={24}><Skeleton active style={{ marginTop: 50 }} /></Col></Row> :
                    <Row gutter={[20, 20]} justify={'center'} align={'middle'}>
                        <Col span={24} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '20px 0' }}>
                            <IoArrowBackCircleOutline size={40} color={'#91A2B8'} style={{ cursor: 'pointer' }} onClick={() => router.replace('/user')} />
                            <Title level={3} style={{ width: '90%', textAlign: 'center', color: '#00115b' }}>Your complaints history</Title>
                        </Col>
                        {
                            !submissions ? <p>Could not fetch submissions or Check your internet connection</p> :
                                submissions === [] ? <p>Could not fetch submissions or Check your internet connection</p> :
                                    submissions.map((item, index) => {
                                        return (
                                            <SubmissionCard title={item.content} key={index} index={index} content={item.content} category={item.category} type={item.type} date={item.date} isResolved={item.resolved} />
                                        )
                                    }).reverse()
                        }
                    </Row>
            }
        </Layout>
    )
}

export default Submissions