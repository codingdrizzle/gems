import React from 'react'
import { Layout as Structure } from 'antd'
import Navbar from '../../components/user-dashboard/navbar'
import styles from './home-layout.module.css'

const { Header, Content, Footer } = Structure
const list = ['Home', 'Notifications', 'Tips', 'Settings']

const Layout = ({children, footer}) => {
  return (
    <Structure style={{background: '#fff'}}>
        <Header className={styles.header}>
            <Navbar className={styles.stickyNav}/>
        </Header>
        <Content className={styles.content}>
            {children}
        </Content>
        {
          !footer ? '' : 
        <Footer className={styles.footer}>
          {footer}
        </Footer>
        }
    </Structure>
  )
}

export default Layout