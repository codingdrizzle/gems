import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import styles from '../styles/home-styles/global.module.css'
import Preloader from '../commons/preloader'
import Home from '../components/home'


export default function HomePage() {
  const [loading, setloading] = useState(true)

  setTimeout(() => {
    setloading(false)
  }, 3000);

  return (
    <div className={styles.container} id={'light'}>
      <Head>
        <title title='Ghana Emergency Services'>GEMS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {loading ? <Preloader /> :
        <Row>
          <Col xs={24}>
            <Home />
          </Col>
        </Row>}
    </div>
  )
}
