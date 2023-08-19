import {useRouter} from 'next/router'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {getComplaints} from '../../../states/actions'
import React, {useEffect, useState, useCallback} from 'react'
import {Row, Col, Skeleton, Typography, message, Spin} from 'antd'
import {IoArrowBackCircleOutline} from 'react-icons/io5'
import Layout from '../../../layouts/user-dashboard-layouts/home-layout'
import SubmissionCard from './card'
import {API} from "../../../api/axios-client";
import {useAtomValue} from "jotai";
import {tokenData} from "../../../store";

const {Title} = Typography

const Submissions = () => {
    // useRouter
    const router = useRouter()

    //useState
    const [loading, setLoading] = useState(true)
    const [submissions, setSubmissions] = useState([])

    const user = useAtomValue(tokenData)
    useEffect(() => {
        (async () => {
            try {
                const response = await API.get(`/complaints/${user?._id}`);
                setSubmissions(response?.data);
            } catch (error) {
                message.error(error.response.data.message)
            }
            setLoading(false);
        })();
    });

    return (
        <Layout active={'home'}>
            {
                loading ? <Row><Col span={24}><Skeleton active style={{marginTop: 50}}/></Col></Row> :
                    <Row gutter={[20, 20]} justify={'center'} align={'middle'}>
                        <Col span={24} style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            margin: '20px 0'
                        }}>
                            <IoArrowBackCircleOutline size={40} color={'#91A2B8'} style={{cursor: 'pointer'}}
                                                      onClick={() => router.replace('/user')}/>
                            <Title level={3} style={{width: '90%', textAlign: 'center', color: '#00115b'}}>Your
                                complaints history</Title>
                        </Col>
                        {
                            submissions === [] || !submissions ? <Spin size='large' spinning/> :
                                submissions.map((item, index) => {
                                    return (
                                        <SubmissionCard key={index} index={index}
                                                        content={item.content} category={item.category} type={item.type}
                                                        updatedAt={item.updatedAt} isResolved={item.resolved}/>
                                    )
                                }).reverse()
                        }
                    </Row>
            }
        </Layout>
    )
}

export default Submissions