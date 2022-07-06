import React from 'react'
import { Row, Col, Skeleton } from 'antd'

const Preloader = () => {
  return (
    <Row align='middle' justify='center'>
        <Col xs={18} lg={14}>
            <Skeleton/>
        </Col>
    </Row>
  )
}

export default Preloader