import React from 'react'
import { Row, Col, Card, Divider, Typography } from 'antd'
import styles from '../../../styles/user-styles/user-notification/notification-card.module.css'

const { Title, Text } = Typography

const NotificationCard = ({ borderColor, title, text, timestamp }) => {
  console.log(borderColor)
  return (
    <Row justify='center' align='middle'>
        <Col xs={24} lg={18}>
            <Card className={styles.card}>
                <Row>
                  <Col span={1}>
                    <Divider type={'vertical'} className={[styles.divider, borderColor]} />
                  </Col>
                  <Col span={23}>
                    <Row>
                      <Col span={24}><Title className={styles.title}>{title}</Title></Col>
                      <Col span={24}><Text className={styles.text}>{text}</Text></Col>
                    </Row>
                  </Col>
                </Row>
                <div className={styles.timestamp}><Text style={{color: '#ccc'}}>{timestamp}</Text></div>
            </Card>
        </Col>
    </Row>
  )
}

export default NotificationCard