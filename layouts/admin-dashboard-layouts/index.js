import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import Navigation from './side-nav'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { FaSignOutAlt } from 'react-icons/fa'
const { Title, Text } = Typography

const Layout = (props) => {
  return (
    <div className={styles.parent} style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', overflowX: 'hidden',  }}>
      <Navigation setActiveTab={props.setActiveTab} count={props.count}/>
      <Row className={styles.mainContent}>
        <Col span={24} className={styles.stickyNav} align={'middle'} justify={'center'}>
          <Title style={{margin: 0}}>{props.title}</Title>
          <Button className={styles.logoutBtn}>
            <Text style={{ color: '#fff', fontWeight: 500 }} className={styles.logoutText}>Logout</Text>
            <FaSignOutAlt size={20} />
          </Button>
        </Col>
        <Col span={24} style={{ paddingTop: 10}}>
          {props.children}
        </Col>
      </Row>
    </div>
  )
}

export default Layout