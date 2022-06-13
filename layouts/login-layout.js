import React, { Children } from 'react'
import { Layout as Structure } from 'antd'
import styles from './login-layout.module.css'

const { Content } = Structure
const Layout = ({ children }) => {
  return (
    <Structure className={styles.layout}>
      <Content className={styles.content}>
        {children}
      </Content>
    </Structure>
  )
}

export default Layout