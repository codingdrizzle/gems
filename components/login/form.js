import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import React, { useState, useRef, useMemo } from 'react'
import { Row, Col, Typography, Input, Divider, Button, message } from 'antd'
import { BiUser, BiLock, BiLogIn } from 'react-icons/bi'
import { BsEye, BsEyeSlash, BsArrowReturnLeft } from 'react-icons/bs'
import styles from '../../styles/login-styles/login-card.module.css'
import colors from '../../styles/colors.module.css'
import { loginSchema } from '../../helpers/form-validation'

const router = Router

const { Text } = Typography


const Form = () => {
    const [show, setShow] = useState(false)
    const [passwordHash, setPasswordHash] = useState('password')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const showEye = () => {
        setPasswordHash(show ? 'password' : 'text')
        setShow(!show)
    }
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    const handleLogin = async () => {
        const { error, value } = loginSchema.validate({ Username: username, Password: password })
        
        if (error){
            await message.error({content: error.message, duration: 5,style: {color: 'red'}});
        }else{
          let users
          await axios.get(`/api/users`)
            .then((result) => users = result.data)
            .catch(err => console.error(err))
            users.forEach(user => {
                const isPassword = bcrypt.compare(password, user.password).then(equal => equal).catch(err => console.error(err))
                
                if(user.username === username && isPassword){
                    message.success('Login successful!')
                    console.log(user)
                }
            });
        }
    }

    return (
        <Row>
            <Col span={24}><Text className={[styles.loginText, colors.primaryTextColor2]}>Login</Text></Col>
            <Col span={24}>
                <div className={styles.inputArea}>
                    <Input
                        defaultValue={username}
                        type={'text'}
                        prefix={<BiUser className={styles.formIcon} />}
                        placeholder="Username"
                        bordered={false}
                        onChange={handleUsername}
                    />
                    <Divider className={styles.divider} />
                    <Button className={styles.loginBtn} title='Login' onClick={handleLogin}>
                        <BiLogIn className={styles.loginBtnIcon} />
                    </Button>
                    <Input
                        defaultValue={password}
                        type={passwordHash}
                        prefix={<BiLock className={styles.formIcon} />}
                        suffix={show ?
                            <BsEyeSlash className={styles.eyeIcon} onClick={showEye} /> :
                            <BsEye className={styles.eyeIcon} onClick={showEye} />}
                        placeholder="Password"
                        bordered={false}
                        onChange={handlePassword}
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
                    <Link href={'/'}><a><Text style={{ color: '#24E9A3', textDecoration: 'underline', fontWeight: 500 }}><BsArrowReturnLeft />Home</Text></a></Link>
                </Text>
            </Col>
        </Row>
    )
}

export default Form