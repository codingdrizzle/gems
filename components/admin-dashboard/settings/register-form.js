import React, { useState } from 'react'
import { FaUser, FaLock, FaAddressCard } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Card, Row, Col, Button, Input, Typography } from 'antd'

import styles from '../../../styles/admin-styles/settings-styles/register.module.css'

const { Title } = Typography
const { Password } = Input

const RegisterForm = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  return (
    <Card className={[styles.card, 'registerCard']}>
      <Row justify='center' align='midde' gutter={[20,20]} className={styles.cardRow}>
        <Col span={24} style={{ textAlign: 'center' }}><Title level={4} style={{ color: '#00115b', fontWeight: 600}}>Register Agent</Title></Col>
        <Col span={24}>
          <Input prefix={<FaAddressCard color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'text'} placeholder='Agent Name' value={name} className={styles.input} onChange={(e) => setName(e.target.value) }></Input>
        </Col>
        <Col span={24}>
          <Input prefix={<MdEmail color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'email'} placeholder='Email Address' value={email} className={styles.input} onChange={(e) => setEmail(e.target.value)}></Input>
        </Col>
        <Col span={24}>
          <Input prefix={<FaUser color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'text'} placeholder='Username' value={username} className={styles.input} onChange={(e) => setUsername(e.target.value)}></Input>
        </Col>
        <Col span={24}>
          <Password prefix={<FaLock color='#91A2B8' size={16} style={{marginRight: 10}}/>} placeholder='Password' value={password} className={styles.input} onChange={(e) => setPassword(e.target.value)}></Password>
        </Col>
        <Col span={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button className={styles.btn}>Register</Button>
        </Col>
      </Row>
    </Card>
  )
}

export default RegisterForm