import Link from 'next/link'
import React, { useState } from 'react'
import { Row, Col, Typography, Input, Divider, Button } from 'antd'
import { BiUser, BiLock, BiLogIn } from 'react-icons/bi'
import { BsEye, BsEyeSlash, BsArrowReturnLeft } from 'react-icons/bs'
import styles from '../../styles/login-styles/login-card.module.css'
import colors from '../../styles/colors.module.css'

const { Text } = Typography
const Form = () => {
    const [show, setShow] = useState(false)
    const [passwordHash, setPasswordHash] = useState('password')


    const showEye = () => {
        setPasswordHash(show ? 'password' : 'text')
        setShow(!show)
    }
    return (
        <Row>
            <Col span={24}><Text className={[styles.loginText, colors.primaryTextColor2]}>Login</Text></Col>
            <Col span={24}>
                <div className={styles.inputArea}>
                    <Input
                        id={styles.usernameText}
                        type={'text'}
                        prefix={<BiUser className={styles.formIcon} />}
                        placeholder="Username"
                        bordered={false}
                    />
                    <Divider className={styles.divider} />
                    <Button className={styles.loginBtn} title='Login'>
                        <BiLogIn className={styles.loginBtnIcon} />
                    </Button>
                    <Input
                        id={styles.usernameText}
                        type={passwordHash}
                        prefix={<BiLock className={styles.formIcon} />}
                        suffix={show ?
                            <BsEyeSlash className={styles.eyeIcon} onClick={showEye} /> :
                            <BsEye className={styles.eyeIcon} onClick={showEye} />}
                        placeholder="Password"
                        bordered={false}
                    />
                </div>
                <div className={styles.otherLinks}>
                    <Link href={'/forgot-password'}><a><Text className={styles.forgotPassword}>Forgot Password?</Text></a></Link>
                    <Text className={styles.register}>
                        Don&apos;t have an account? &nbsp;
                        <Link href={'/register'}><a><Text style={{ color: '#24E9A3', textDecoration: 'underline', fontWeight: 600 }}>Register</Text></a></Link>
                    </Text>

                </div>
                    <Text className={styles.backHome}>
                        Go back &nbsp;
                    <Link href={'/'}><a><Text style={{ color: '#24E9A3', textDecoration: 'underline', fontWeight: 500 }}><BsArrowReturnLeft/>Home</Text></a></Link>
                    </Text>
            </Col>
        </Row>
    )
}

export default Form