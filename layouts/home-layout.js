import React from 'react'
import { Layout as Structure } from 'antd'
import styles from './home-layout.module.css'
import Navbar from '../components/home/navbar'

const { Header, Content, Footer } = Structure

const Layout = ({ children, footer }) => {
    return (
        <Structure className={styles.layout}>
            <Header className={styles.header}>
                <Navbar />
            </Header>
            <Content className={styles.content}>{children}</Content>
            <Footer className={styles.footer}>
                {footer}
            </Footer>
        </Structure>
    )
}

export default Layout