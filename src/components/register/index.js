import React from 'react'
import { Card } from 'antd'
import Layout from '../../layouts/signup-layout'
import styles from '../../styles/register-styles/register-card.module.css'
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