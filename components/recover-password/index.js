import React from 'react'
import { Card } from 'antd'
import Layout from '../../layouts/recover-password-layout'
import styles from '../../styles/recover-password-styles/recover-password-card.module.css'
import CardHeader from './card-header'
import Form from './form'

const RecoverPassword = () => {
  return (
    <Layout>
        <Card bordered={false} className={styles.card}>
            <CardHeader/>
            <Form/>
        </Card>
    </Layout>
  )
}

export default RecoverPassword