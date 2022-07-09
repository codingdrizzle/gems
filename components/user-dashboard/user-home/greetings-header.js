import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Col, Typography } from 'antd'
import { Times } from '../../../helpers/times'
import styles from '../../../styles/user-styles/user-home-styles/content.module.css'


const { Text } = Typography
const Greetings = () => {

    const [greeting, setGreeting] = useState('')
    const [sun, setSun] = useState(<></>)

    useEffect(() => {
        setGreeting(Times().greeting)
        setSun(Times().sun)
    },[])

  return (
      <Col span={24}>
          <Text className={styles.shadouts}>
              Hello <span style={{ fontWeight: 600 }}>Username</span>
              , <br /> Good {greeting.toLowerCase()} {sun}
          </Text>
          <Text className={styles.instruction}>
              <p style={{ margin: 0, fontWeight: 600 }}>Please choose an action by tapping on a button below.</p>
              <p style={{ margin: 0 }}>Tap the 3-bars icon at the top-right corner for menu.</p>
          </Text>
      </Col>

  )
}

export default Greetings