import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd'
import { BsStack } from 'react-icons/bs'
import { IoToday } from 'react-icons/io5'
import { FaCalendarAlt, FaUserCheck } from 'react-icons/fa'
import Layout from "../../../layouts/admin-dashboard-layouts";
import { AnalyticsCard, UsersCard } from './card';
import { ChartBar, ChartPie, ChartLine } from '../../../helpers/charts'


const Home = ({ complaints, users }) => {
    // States
    const [people, setPeople] = useState(0)
    const [complaintsTotal, setComplaintsTotal] = useState(0)
    const [complaintsMonth, setComplaintsMonth] = useState(0)
    const [complaintsToday, setComplaintsToday] = useState(0)

    useEffect(() => {
        const today = complaints.map(data => ({
            today: data.date === new Date(Date.now()) ? data.date : null
        }))
        today = today.filter(item => item.today !== null)

        const lastMonth = complaints.map(data => ({
            lastMonth: new Date(data.date).getMonth() === new Date(Date.now()).getMonth() ? data.date : null
        }))
        lastMonth = lastMonth.filter(item => item.lastMonth !== null)
        console.log(lastMonth)

        setPeople(users.length)
        setComplaintsTotal(complaints.length)
        setComplaintsToday(today.length)
        setComplaintsMonth(lastMonth.length)

    }, [people, complaintsMonth, complaintsToday, complaintsTotal])


    return (
        <Layout title={'Dashboard'}>
            {/* Render all cards */}
            <Row gutter={[20, 10]} style={{ marginBottom: 50 }}>
                <Col xs={12} sm={8} md={6}>
                    <AnalyticsCard cardBg={'rgba(27,202,205,0.3)'} textColor={'rgb(20,100,255)'} percent={complaintsTotal / 100} typeText={'ALL'} icon={<BsStack size={20} color={'#00115B'} />} typeNumber={complaintsTotal} />
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <AnalyticsCard cardBg={'rgba(251,181,0,0.3)'} textColor={'rgb(255,150,0)'} percent={complaintsMonth / 100} typeText={'MONTH'} icon={<FaCalendarAlt size={20} color={'#00115B'} />} typeNumber={complaintsMonth} />
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <AnalyticsCard cardBg={'rgba(233,36,36,0.3)'} textColor={'rgb(200,36,36)'} percent={complaintsToday / 100} typeText={'TODAY'} icon={<IoToday size={20} color={'#00115B'} />} typeNumber={complaintsToday} />
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <UsersCard cardBg={'rgba(216, 216, 216, 0.3)'} textColor={'rgb(130, 130, 130)'} icon={<FaUserCheck size={20} color={'#00115B'} />} typeText={'USERS'} typeNumber={people} />
                </Col>
            </Row>
            <Row gutter={[52, 42]} style={{ marginBottom: 50 }}>
                <Col xs={24} md={12}>
                    <ChartBar />
                </Col>
                <Col xs={24} md={12}>
                    <ChartPie />
                </Col>
                <Col xs={24}>
                    <ChartLine />
                </Col>
            </Row>
        </Layout>
    );
}

export default Home;
