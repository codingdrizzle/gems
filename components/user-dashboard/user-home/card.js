import React, { useState } from 'react'
import { Row, Col, Typography, Button, Card as CardiB } from 'antd'
import styles from '../../../styles/user-styles/user-home-styles/content.module.css'
const { Text } = Typography

const Card = ({ innerText, btnText, Icon, cardColor, iconColor, btnColor, onClick }) => {

  return (
    <>
      <CardiB bordered hoverable className={[styles.card, cardColor]} onClick={onClick}>
        <Row>
          <Col span={24} className={[styles.flexCardContent, styles.cardIcon, iconColor]}>
            {Icon}
          </Col>
        </Row>
        <Row>
          <Col span={24} className={styles.flexCardContent}>
            <Text className={styles.cardText}>{innerText}</Text>
          </Col>
        </Row>
        <Row>
          <Col span={24} className={styles.flexCardContent}>
            <Button className={[styles.cardBtn, btnColor]}>{btnText}</Button>
          </Col>
        </Row>
      </CardiB>
    </>
  )
}

Card.defaultProps = {
  showDrawer: false
}
export default Card