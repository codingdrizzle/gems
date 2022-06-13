import React from 'react'
import { Row, Col } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/recover-password-styles/recover-password-card.module.css'

const CardHeader = () => {
  return (
    <Row justify={'center'} align={'middle'}>
        <Col xs={24} className={styles.cardHeader}>
            <Logo value={100}/>
        </Col>
    </Row>
  )
}

export default CardHeader