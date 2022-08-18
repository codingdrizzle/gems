import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getSession } from 'next-auth/react'
import { Row, Col, Skeleton, Typography } from 'antd'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import SubmissionCard from './card'

const { Title } = Typography

const Submissions = ({complaints}) => {
    // useRouter
    const router = useRouter()
    //useState
    const [data, setDate] = useState([])
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(true)

    // get session
    const retrieveSession = async () => {
        const session = await getSession()
        return session.user.id
    }

    
    
    useEffect(() => {
        retrieveSession().then(res => setId(res))
        setLoading(false)
    }, [id])

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
                            complaints.map((item, index) => {
                                return id === item.user._id  && (
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