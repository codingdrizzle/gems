import React from 'react'
import { Layout as Structure } from 'antd'
import Navbar from '../../components/user-dashboard/navbar'
import styles from './home-layout.module.css'

const { Header, Content, Footer } = Structure

const Layout = ({children}) => {
  return (
    <Structure style={{background: '#fff'}}>
        <Header className={styles.header}>
            <Navbar className={styles.stickyNav}/>
        </Header>
        <Content className={styles.content}>
            {children}
        </Content>
    </Structure>
  )
}

export default Layout