import React from 'react'
import { Layout as Structure } from 'antd'
import PageFooter from '../../components/footer'
import Navbar from '../../components/user-dashboard/navbar'
import styles from './home-layout.module.css'

const { Header, Content, Footer } = Structure
const list = ['Home', 'Notifications', 'Tips', 'Settings']

const Layout = ({children}) => {
  return (
    <Structure style={{background: '#fff'}}>
        <Header className={styles.header}>
            <Navbar className={styles.stickyNav}/>
        </Header>
        <Content className={styles.content}>
            {children}
        </Content>
        <Footer className={styles.footer}>
          <PageFooter company={{title: 'GEMS', list: list}}/>
        </Footer>
    </Structure>
  )
}

export default Layout