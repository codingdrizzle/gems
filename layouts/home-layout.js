import React from 'react'
import { Layout as Structure } from 'antd'
import styles from './home-layout.module.css'
import Navbar from '../components/home/navbar'

const { Header, Content, Footer } = Structure

const Layout = ({ children }) => {
    return (
        <Structure className={styles.layout}>
            <Header className={styles.header}>
               <Navbar/>
            </Header>
            <Content>{children}</Content>
        </Structure>
    )
}

export default Layout