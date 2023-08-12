import React from 'react'
import { Card } from 'antd'
import Layout from '../../layouts/login-layout'
import styles from '../../styles/login-styles/login-card.module.css'
import CardHeader from './card-header'
import Form from './form'

const Login = () => {
  return (
    <Layout>
        <Card bordered={false} className={styles.card}>
            <CardHeader/>
            <Form/>
        </Card>
    </Layout>
  )
}

export default Login