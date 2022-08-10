import React from 'react'
import Router from 'next/router'
import { Typography, Row, Col } from 'antd'
import { BiErrorCircle } from 'react-icons/bi'
import { BsCheckCircle, BsEyeFill } from 'react-icons/bs'
import styles from '../../../styles/admin-styles/complaints-styles/complaints.module.css'

const { Text } = Typography
const router = Router

const AlertCard = ({ type, children }) => {
    return (
        type === 'unread' ?
            (<Row className={styles.alertDanger} align={'middle'} justify={'center'} onClick={() => router.push('/id')}>
                <Col xs={18} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 30 }}>
                    <BiErrorCircle className={styles.iconDanger} />
                    <Text className={styles.text}>{children}</Text>
                </Col>
                <Col xs={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <BsEyeFill className={styles.preview} />
                </Col>
            </Row>) :
            (<Row className={styles.alertSuccess} align={'middle'} justify={'center'} onClick={() => router.push('/id')}>
                <Col xs={18} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 30 }}>
                    <BsCheckCircle className={styles.iconSuccess} />
                    <Text className={styles.text}>{children}</Text>
                </Col>
                <Col xs={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <BsEyeFill className={styles.preview} />
                </Col>
            </Row>)
    )
}

export default AlertCard