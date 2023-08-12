import Link from 'next/link'
import React, { useState } from 'react'
import { Row, Col, Typography, Input, Button } from 'antd'
import { BiUser } from 'react-icons/bi'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { FaUnlockAlt } from 'react-icons/fa'
import styles from '../../styles/recover-password-styles/recover-password-card.module.css'
import colors from '../../styles/colors.module.css'

const { Text } = Typography
const Form = () => {
    return (
        <Row>
            <Col span={24}><Text className={[styles.recoverText, colors.primaryTextColor2]}>Password Recovery</Text></Col>
            <Col span={24}>
                <div className={styles.inputArea}>
                    <Input
                        id={styles.usernameText}
                        type={'text'}
                        prefix={<BiUser className={styles.formIcon} />}
                        placeholder="Enter your Email"
                        bordered={false}
                    />
                    <Button className={styles.recoverBtn1} title='Recover'>
                        <FaUnlockAlt className={styles.recoverBtnIcon} />
                    </Button>
                </div>
                <div className={styles.otherLinks}>
                <Button className={styles.recoverBtn2} title='Recover'>
                    <Text className={styles.recoverBtnText}>
                        Recover Password
                    </Text>               
                </Button>

                </div>
                <Text className={styles.backHome}>
                    Go back &nbsp;
                    <Link href={'/'}><a><Text style={{ color: '#24E9A3', textDecoration: 'underline', fontWeight: 500 }}><BsArrowReturnLeft />Home</Text></a></Link>
                </Text>
            </Col>
        </Row>
    )
}

export default Form