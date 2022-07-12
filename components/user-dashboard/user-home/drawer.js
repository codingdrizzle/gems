import React from 'react'
import { Drawer as Puller, Typography, Row, Col, Divider } from 'antd'
import styles from '../../../styles/user-styles/user-home-styles/drawer.module.css'
import { GrFormClose } from 'react-icons/gr'
import { BsCheckAll, BsDash } from 'react-icons/bs'
import { Contact, Policy } from '../../../helpers/info-details'

const { Title, Text } = Typography

const Drawer = ({ onClose, visible }) => {
    return (
        <Puller
            title={<Title level={4} >Welcome to GEMS Info Desk</Title>}
            placement={'left'}
            closable={true}
            onClose={onClose}
            visible={visible}
            closeIcon={<GrFormClose size={30} style={{ color: 'red' }} />}
        width={400}
        >
            <Row>
                <Col span={24}><Title level={4}>Help Lines</Title></Col>
                {
                    Contact.map((item, index) => {
                        return (
                            <>
                                <Col span={24} key={index}>
                                    <div className={styles.listTitle}>
                                        <BsCheckAll size={20} />
                                        <Text>{item.title}</Text>
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
                    <Title level={4} style={{ color: 'rgba(233, 36, 36, 0.7)' }}>Policies</Title>
                </Col>

                {
                    Policy.map((item, index) => {
                        return (
                            <>
                                <Col span={24} key={index} className={styles.policy}>
                                    <Text style={{ color: '#91A2B8' }}>
                                        <BsCheckAll size={17} style={{ color: 'rgb(255, 0, 0)' }} />
                                        {item.text}
                                    </Text>
                                </Col>
                                <Divider key={index} style={{ margin: '8px 0', borderColor: 'rgba(233, 36, 36, 0.4)' }} />
                            </>
                        )
                    })
                }
            </Row>
        </Puller>
    )
}

export default Drawer