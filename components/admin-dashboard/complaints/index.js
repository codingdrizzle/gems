import React from 'react'
import { Row, Col, Divider } from 'antd'
import Layout from '../../../layouts/admin-dashboard-layouts';
import AlertCard from './complaints';

const Notification = () => {
    return (
        <Layout title={'Complaints'}>
            <Row gutter={[10, 20]} justify='center' align='middle'>
                <Col xs={24}>
                    <Divider orientation='center' style={{width: '20%'}}>Unread</Divider>
                    <AlertCard type={'unread'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </AlertCard>
                    <AlertCard type={'unread'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </AlertCard>

                </Col>
                <Col xs={24}>
                    <Divider orientation='center' style={{width: '20%'}}>Read</Divider>
                    <AlertCard type={'read'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </AlertCard>
                </Col>
            </Row>
        </Layout>
    );
}

export default Notification