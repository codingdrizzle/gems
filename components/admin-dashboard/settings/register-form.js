import React, { useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { FaUser, FaLock, FaAddressCard } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiShieldStarFill } from 'react-icons/ri'
import { Card, Row, Col, Button, Input, Typography, message } from 'antd'
import { validateAgent } from '../../../helpers/form-validation'
import styles from '../../../styles/admin-styles/settings-styles/register.module.css'

const { Title } = Typography
const { Password } = Input

const RegisterForm = () => {
  const [ name, setName ] = useState('')
  const [ rank, setRank ] = useState('')
  const [ contact, setContact ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const resetForm = () => {
    setName('')
    setRank('')
    setContact('')
    setUsername('')
    setPassword('')
  }

  const handleRegister = async () => {
    const data = {
      id: password,
      name,
      rank,
      username,
      contact,
    }
    // const { error, value } = validateAgent.validate({Name: name, Rank: rank, Contact: contact, Username: username, Id: password})
    // if(error){
    //     message.error(error.message)
    // }else{
      await axios.post('/api/agents', data)
      .then(res => {
        message.success(res.data.message)
        resetForm()
      })
      .catch(err => message.error(err))
    

  }

  return (
    <Card className={[styles.card, 'registerCard']}>
      <Row justify='center' align='midde' gutter={[20,20]} className={styles.cardRow}>
        <Col span={24} style={{ textAlign: 'center' }}><Title level={4} style={{ color: '#00115b', fontWeight: 600}}>Register Agent</Title></Col>
        <Col span={24}>
          <Input prefix={<FaAddressCard color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'text'} placeholder='Agent Name' value={name} className={styles.input} onChange={(e) => setName(e.target.value) }/>
        </Col>
        <Col span={24}>
          <Input prefix={<RiShieldStarFill color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'text'} placeholder='Position/Rank' value={rank} className={styles.input} onChange={(e) => setRank(e.target.value)}/>
        </Col>
        <Col span={24}>
          <Input prefix={<BsFillTelephoneFill color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'text'} placeholder='Contact' value={contact} className={styles.input} onChange={(e) => setContact(e.target.value)}/>
        </Col>
        <Col span={24}>
          <Input prefix={<FaUser color='#91A2B8' size={16} style={{marginRight: 10}}/>} type={'text'} placeholder='Username' value={username} className={styles.input} onChange={(e) => setUsername(e.target.value)}/>
        </Col>
        <Col span={24} style={{display: 'flex', gap: 10}}>
          <Password type={'text'} prefix={<FaLock color='#91A2B8' size={16} style={{marginRight: 10}}/>} placeholder='Agent ID' value={password} className={styles.input} style={{width: '60%'}}/>
          <Button onClick={() => setPassword(nanoid(6))} style={{ width: '40%' }} >Generate ID</Button>
        </Col>
        <Col span={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button className={styles.btn} onClick={handleRegister}>Register</Button>
        </Col>
      </Row>
    </Card>
  )
}

export default RegisterForm