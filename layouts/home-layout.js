import React from 'react'
import { Layout as Structure } from 'antd'
import PageFooter from '../components/footer'
import styles from './home-layout.module.css'
import Navbar from '../components/home/navbar'

const { Header, Content, Footer } = Structure
const list = ['Home', 'Report', 'Support']

const Layout = ({ children }) => {
    return (
        <Structure className={styles.layout}>
            <Header className={styles.header}>
                <Navbar />
            </Header>
            <Content className={styles.content}>{children}</Content>
            <Footer className={styles.footer}>
                <PageFooter company={{title: '',list: list}}/>
            </Footer>
        </Structure>
    )
}

export default Layout