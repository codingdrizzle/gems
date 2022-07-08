import React, { useState } from 'react'
import { Row, Col, Card, Divider, Typography, Avatar, Badge } from 'antd'
import styles from '../../../styles/user-styles/user-notification/notification-card.module.css'
import { BsDash } from 'react-icons/bs'



const { Title, Text } = Typography

const NotificationCard = ({ caption, captionIcon, count, borderColor, bgColor, title, text, dateStamp }) => {
  const [ display, setDisplay ] = useState(true)

  const hideFullText = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const showFullText = {
    whiteSpace: 'initial',
    overflow: 'initial',
    textOverflow: 'initial'
  }
  
  return (
    <>
      <Row justify='center' align='middle'>
        <Col xs={24} lg={18} style={{marginBottom: 7, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 5}}>
          <Title className={styles.caption}>{caption}</Title>
          <Badge count={count} size={'medium'} title={'New notification'}>
            <Avatar shape='circle' size={'large'} icon={captionIcon} className={[styles.bellIcon, bgColor]}></Avatar>
          </Badge>
        </Col>
      </Row>
      <Row justify='center' align='middle'>
        <Col xs={24} lg={18}>
          <Card bordered={false} className={styles.card}>
            <Row>
              <Col xs={5} md={3} lg={1}>
                <Divider type={'vertical'} className={[styles.divider, borderColor]} />
              </Col>
              <Col xs={19} md={21} lg={23}>
                <Row>
                  <Col span={24}><Title className={styles.title}>{title}</Title></Col>
                  <Col span={24}>
                    <Text className={styles.text} style={display ? hideFullText : showFullText}>
                      {text} 
                    </Text>
                    <span className={styles.readMore} style={{ display: display ? 'block' : 'none' }} onClick={() => setDisplay(false)}>Read more...</span> 
                    <span className={styles.readMore} style={{ display: display ? 'none' : 'block' }} onClick={() => setDisplay(true)}>...Read less</span> 
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className={styles.timestamp}>
              <BsDash size={20}/>
              <Text style={{ color: '#ccc' }}>{dateStamp}</Text>
              </div>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default NotificationCard