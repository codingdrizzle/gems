import React from 'react';
import { Row, Col } from 'antd'
import Layout from "../../../layouts/admin-dashboard-layouts";
import { AnalyticsCard, UsersCard } from './card';
import { BsStack } from 'react-icons/bs'
import { IoToday } from 'react-icons/io5'
import { FaCalendarAlt, FaUserCheck } from 'react-icons/fa'




const Home = () => {
    return (
        <Layout title={'Dashboard'}>
            {/* Render all cards */}
            <Row gutter={[20,10]}>
                <Col xs={12} sm={8} md={6}>
                    <AnalyticsCard cardBg={'rgba(27,202,205,0.3)'} textColor={'rgb(20,100,255)'} percent={70} typeText={'ALL'} icon={<BsStack size={20} color={'#00115B'}/>} typeNumber={'6,320'}/>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <AnalyticsCard cardBg={'rgba(251,181,0,0.3)'} textColor={'rgb(255,150,0)'} percent={42} typeText={'MONTH'} icon={<FaCalendarAlt size={20} color={'#00115B'}/>} typeNumber={'3,998'}/>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <AnalyticsCard cardBg={'rgba(233,36,36,0.3)'} textColor={'rgb(200,36,36)'} percent={10} typeText={'TODAY'} icon={<IoToday size={20} color={'#00115B'}/>} typeNumber={'562'}/>
                </Col>
                <Col xs={12} sm={8} md={6}>
                    <UsersCard cardBg={'rgba(216, 216, 216, 0.3)'} textColor={'rgb(130, 130, 130)'} icon={<FaUserCheck size={20} color={'#00115B'}/>} typeText={'USERS'} typeNumber={'2,300'}/>
                </Col>
            </Row>
        </Layout>
    );
}

export default Home;
