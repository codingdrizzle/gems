import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useState, useRef, useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {Row, Col, Typography, Input, Divider, Button, message} from 'antd'
import {BiUser, BiLock, BiLogIn} from 'react-icons/bi'
import {BsEye, BsEyeSlash, BsArrowReturnLeft} from 'react-icons/bs'
import styles from '../../styles/login-styles/login-card.module.css'
import colors from '../../styles/colors.module.css'
import {loginSchema} from '../../helpers/form-validation'
import {API} from '../../api/axios-client'
import {jwt_token} from '../../store'
import {useSetAtom} from 'jotai'

const {Text} = Typography
const Form = () => {
    const router = useRouter()
    const [show, setShow] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const setToken = useSetAtom(jwt_token)

    const handleLogin = async () => {
        const {error} = loginSchema.validate({Email: email, Password: password})
        try {
            error && message.error({content: error.message, duration: 5, style: {color: 'red'}});

            const result = await API.post('/auth/login', {email, password})

            if (result.status === 200) {
                setToken(result.data.token)
                message.success(result.data.message)
                return router.replace('/user')
            }
        } catch (error) {
            return message.error(error.message)
        }
    }

    return (
        <Row>
            <Col span={24}><Text className={[styles.loginText, colors.primaryTextColor2]}>Login</Text></Col>
            <Col span={24}>
                <div className={styles.inputArea}>
                    <Input
                        defaultValue={email}
                        type={'text'}
                        prefix={<BiUser className={styles.formIcon}/>}
                        placeholder="Email"
                        bordered={false}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Divider className={styles.divider}/>
                    <Input
                        defaultValue={password}
                        type={show ? 'password' : 'text'}
                        prefix={<BiLock className={styles.formIcon}/>}
                        suffix={show ?
                            <BsEyeSlash className={styles.eyeIcon} onClick={() => setShow(!show)}/> :
                            <BsEye className={styles.eyeIcon} onClick={() => setShow(!show)}/>}
                        placeholder="Password"
                        bordered={false}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button className={styles.loginBtn} title='Login' onClick={handleLogin}>
                    <BiLogIn className={styles.loginBtnIcon}/>
                </Button>
                <div className={styles.otherLinks}>
                    <Link href={'/forgot-password'}><a><Text className={styles.forgotPassword}>Forgot
                        Password?</Text></a></Link>
                    <Text className={styles.register}>
                        Don&apos;t have an account? &nbsp;
                        <Link href={'/register'}><a><Text
                            style={{color: '#24E9A3', textDecoration: 'underline', fontWeight: 600}}>Register</Text></a></Link>
                    </Text>

                </div>
                <Text className={styles.backHome}>
                    Go back &nbsp;
                    <Link href={'/'}><a><Text
                        style={{color: '#24E9A3', textDecoration: 'underline', fontWeight: 500}}><BsArrowReturnLeft/>Home</Text></a></Link>
                </Text>
            </Col>
        </Row>
    )
}

export default Form