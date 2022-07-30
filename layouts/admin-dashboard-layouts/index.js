import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import Navigation from './side-nav'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { FaSignOutAlt } from 'react-icons/fa'
const { Title, Text } = Typography

const Layout = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
      <Navigation />
      <Row className={styles.mainContent}>
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <Title style={{margin: 0}}>{title}</Title>
          <Button className={styles.logoutBtn}>
            <Text style={{ color: '#fff', fontWeight: 500 }} className={styles.logoutText}>Logout</Text>
            <FaSignOutAlt size={20} />
          </Button>
        </Col>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </div>
  )
}

export default Layout