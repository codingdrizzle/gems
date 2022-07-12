import React from 'react'
import { Row, Col, Card, Typography, Divider } from 'antd'
import styles from '../../../styles/user-styles/user-tips-styles/tips.module.css'
import { GrFormClose } from 'react-icons/gr'
import { BsCheckAll, BsDash } from 'react-icons/bs'
import { Contact, Policy } from '../../../helpers/info-details'


const { Title, Text } = Typography

const TipsCard = () => {
    return (
        <Row align='middle' justify='center'>
            <Col xs={24} md={18} lg={16}>
                <Card className={styles.card}>
                    <Row>
                        <Col span={24}><Title level={3}>Help Lines</Title></Col>
                        {
                            Contact.map((item, index) => {
                                return (
                                    <>
                                        <Col span={24} key={index}>
                                            <div className={styles.listTitle}>
                                                <BsCheckAll size={25} />
                                                <Text className={styles.title}>{item.title}</Text>
                                            </div>
                                            <div className={styles.listText}>
                                                <BsDash />
                                                <Text className={styles.text}>{item.text1}</Text>
                                            </div>
                                            <div className={styles.listText}>
                                                {index != Contact.length - 1 ? <BsDash /> : ''}
                                                <Text className={styles.text}>{item.text2}</Text>
                                            </div>
                                        </Col>
                                        <Divider key={index} style={{ margin: '15px 0' }} />
                                    </>)
                            })
                        }
                        <Col span={24}>
                            <Title level={3} style={{ color: 'rgba(233, 36, 36, 0.7)' }}>Policies</Title>
                        </Col>

                        {
                            Policy.map((item, index) => {
                                return (
                                    <>
                                        <Col span={24} key={index} className={styles.policy}>
                                            <Row style={{width : '100%'}}>
                                                <Col span={2}>
                                                    <BsCheckAll size={25} style={{ color: 'rgb(255, 0, 0)' }} />
                                                </Col>
                                                <Col span={22}>
                                                    <Text style={{ color: '#91A2B8' }}>
                                                        {item.text}
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Divider key={index} style={{ margin: '15px 0', borderColor: 'rgba(233, 36, 36, 0.4)' }} />
                                    </>
                                )
                            })
                        }
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default TipsCard