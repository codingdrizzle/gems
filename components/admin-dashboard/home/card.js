import React from 'react'
import { Row, Col, Card, Progress, Typography } from 'antd'
import { FaUser } from 'react-icons/fa'
import styles from '../../../styles/admin-styles/home-styles/card.module.css'

const { Text } = Typography

export const AnalyticsCard = ({cardBg, percent, typeText, icon, typeNumber, textColor}) => {
    return (
        <Card className={['myCard', styles.card]} style={{background: cardBg}}>
            <Row gutter={[0, 20]}>
                <Col xs={24}>
                    <Row gutter={[15, 15]} align={'middle'} justify={'center'}>
                        <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Progress type={'circle'} percent={percent} trailColor={'transparent'} strokeColor={'#00115B'} width={60} />
                        </Col>
                        <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: textColor}} className={styles.typeNumber}>{typeNumber}</Text></Col>
                    </Row>
                </Col>
                <Col xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    {icon}<Text className={styles.typeText}>{typeText}</Text>
                </Col>
            </Row>
        </Card>
    )
}

export const UsersCard = ({cardBg, icon, typeText, typeNumber, textColor}) => {
    return( 
        <Card className={['myCard', styles.card]} style={{background: cardBg}}>
            <Row gutter={[0, 20]}>
                <Col xs={24}>
                    <Row gutter={[15, 15]} align={'middle'} justify={'center'}>
                        <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className={styles.userCircle}><FaUser size={30}/></div>
                        </Col>
                        <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: textColor}} className={styles.typeNumber}>{typeNumber}</Text></Col>
                    </Row>
                </Col>
                <Col xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    {icon}<Text className={styles.typeText}>{typeText}</Text>
                </Col>
            </Row>
        </Card>
    )
}