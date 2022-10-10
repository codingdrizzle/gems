import React from 'react'
import { Layout as Structure } from 'antd'
import Navbar from '../../components/user-dashboard/navbar'
import styles from './home-layout.module.css'
import Marquee from './marquee'

const { Header, Content, Footer } = Structure
const list = ['Home', 'Notifications', 'Tips', 'Settings']

const Layout = ({children, footer, active}) => {
  return (
    <Structure style={{background: '#fff'}}>
        <Header className={styles.header}>
            <Navbar className={styles.stickyNav} active={active}/>
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
        <Marquee/>
    </Structure>
  )
}

export default Layout