import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Preloader from '../src/commons/preloader'
import Home from '../src/components/home'

export default function HomePage() {
  const [loading, setloading] = useState(true)

  setTimeout(() => {
    setloading(false)
  }, 3000);

  return (
    <>
      <Head>
        <title title='Ghana Emergency Services'>GEMS</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <Preloader /> :
        <Row>
          <Col xs={24}>
            <Home />
          </Col>
        </Row>}
    </>
  )
}
