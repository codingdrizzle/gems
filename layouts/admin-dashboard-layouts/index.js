import React from 'react'
import { Row, Col, Typography } from 'antd'
import Navigation from './side-nav'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'

const { Title } = Typography

const Layout = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
      <Navigation />
      <Row className={styles.mainContent}>
        <Col span={24}><Title>{title}</Title></Col>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </div>
  )
}

export default Layout