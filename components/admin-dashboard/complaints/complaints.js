import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { Typography, Row, Col, Skeleton, Divider } from 'antd'
import { BiErrorCircle } from 'react-icons/bi'
import { BsCheckCircle, BsEyeFill } from 'react-icons/bs'
import Card from './card'
import styles from '../../../styles/admin-styles/complaints-styles/complaints.module.css'

const { Text } = Typography
const router = Router

const AlertCard = () => {
    // States
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    useEffect(() => {
        setLoading(false)
        axios.get('/api/complaints')
            .then(res => setData(res.data))
            .catch(err => message.err)
    }, [])

    return (
        <Row align={'middle'} justify={'center'} gutter={[20, 20]}>
            { loading ?
                <Col span={24}>
                    <Skeleton active style={{ marginTop: 50 }} /> 
                </Col> :
                <Row align={'middle'} justify={'center'} gutter={[20, 20]}>
                    <Divider orientation='center' style={{ width: '20%' }}>Unread</Divider>
                    {
                    data.map((item, index) => {
                        return !item.resolved ?
                            <Card
                                identity={item._id}
                                key={index}
                                borderColor={'#ff000080'}
                                bgColor={'#e924240d'}
                                isResolved={true}
                                index={index}
                                icon={<BiErrorCircle size={25} color={'#ff000080'} />}
                                details={{ content: item.content, category: item.category, type: item.type, date: item.date, resolved: item.resolved }}
                            />
                            : ''
                    })
                }
                <Divider orientation='center' style={{ width: '20%' }}>Read</Divider>
                {
                    data.map((item, index) => {
                        return item.resolved ? (
                            <Card
                                identity={item._id}
                                key={index}
                                borderColor={'#80E3A8'}
                                bgColor={'#80e3a826'}
                                isResolved={true}
                                index={index}
                                icon={<BsCheckCircle size={25} color={'#80E3A8'} />}
                                details={{ content: item.content, category: item.category, type: item.type, date: item.date, resolved: item.resolved }}
                            />
    
                        ) : ''
                    })
                }
                </Row>
            }
        </Row>
    )
}

export async function getStaticProps(context) {
    await connect()
    const id = context.params.id

    const res = await Complaints.findOne({ _id: ObjectId(id) }).populate('user').exec()
    const complaints = JSON.stringify(res)
    console.log(posts)
    return {
        props: {
            posts
        },
    }
}
export default AlertCard