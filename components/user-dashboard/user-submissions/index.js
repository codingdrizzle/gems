import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getSession } from 'next-auth/react'
import { Row } from 'antd'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import PageFooter from '../../footer/index'
import SubmissionCard from './card'

const list = ['Home', 'Notifications', 'Tips', 'Settings']

const Submissions = () => {
    //useState
    const [data, setData] = useState([])
    const [id, setId] = useState('')
    // get session

    const retrieveSession = async () => {
        const session = await getSession()
        return session.user.id
    }

    useEffect(() => {
        retrieveSession().then(res => setId(res))
        axios.get(`/api/complaints/?id=${id}`)
            .then((res) => {
                setData(res.data)
            })
    }, [id])
    
    return (
        <Layout footer={<PageFooter company={{ title: 'GEMS', list: list }} />} active={'home'}>
            <Row gutter={[0, 20]}>
                {
                    data.map((item, index) => {
                        return (
                            <SubmissionCard title={'Complaint content'} key={index} index={index} content={item.content} category={item.category} type={item.type} date={item.date} isResolved={item.resolved} />
                        )
                    }).reverse()
                }
            </Row>
        </Layout>
    )
}

export default Submissions