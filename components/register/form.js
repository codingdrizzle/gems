import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col, Typography, Input, Divider, Button, message } from 'antd'
import { BiUser, BiLock } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'
import { BsEye, BsEyeSlash, BsArrowReturnLeft, BsCardText, BsCheck2 } from 'react-icons/bs'
import { FormFlag } from '../../commons/flag'
import styles from '../../styles/register-styles/register-card.module.css'
import colors from '../../styles/colors.module.css'
import { registerSchema } from '../../helpers/form-validation'

const router = Router

const { Text } = Typography
const Form = () => {
    const [show, setShow] = useState(false)
    const [passwordHash, setPasswordHash] = useState('password')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [contact, setContact] = useState('')

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const handleLastname = (e) => {
        setLastname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRepassword = (e) => {
        setRepassword(e.target.value)
    }
    const handleContact = (e) => {
        setContact(e.target.value)
    }

    const validateContact = () => {
        if (contact[0] == 0) {
            return message.error('Your contact should not begin with "0".')
        }
        if (contact.includes('+233')) {
            return message.error('Contact must not include "+233"')
        }
        if (contact.length != 9) {
            return message.error('Contact not valid.')
        }
        return null
    }

    const handleSubmit = async () => {
        const { error, value } = registerSchema.validate({ Firstname: firstname, Lastname: lastname, Email: email, Username: username, Password: password, Repeat_password: repassword, Contact: contact });
        if (error, validateContact()) {
            message.error(error.message === '"Repeat_password" must be [ref:Password]' ? 'Passwords does not match' : error.message)
        } else {
            axios.post('http://localhost:3000/api/users', { firstname, lastname, email, username, password, contact })
                .then((result) => { 
                    if(result.data.exist){
                        message.error(result.data.exist)
                    }else{
                        message.success(result.data.user)
                        router.push('/login/')
                    }
                })
            .catch ((err) => message.error(err.message))
            
        }
    }
const showEye = () => {
    setPasswordHash(show ? 'password' : 'text')
    setShow(!show)
}
return (
    <Row>
        <Col span={24}><Text className={[styles.registerText, colors.primaryTextColor2]}>Register</Text></Col>
        <Col span={24}>
            <div className={styles.inputArea}>
                <Input.Group size={'6'}>
                    <Input
                        type={'text'}
                        prefix={<BsCardText className={styles.formIcon} />}
                        placeholder="First name"
                        bordered={false}
                        defaultValue={firstname}
                        onChange={handleFirstname}
                    />
                    <Divider className={styles.divider} />
                    <Input
                        type={'text'}
                        prefix={<BsCardText className={styles.formIcon} />}
                        placeholder="Last name"
                        bordered={false}
                        defaultValue={lastname}
                        onChange={handleLastname}
                    />
                    <Divider className={styles.divider} />
                    <Input
                        type={'text'}
                        prefix={<GoMail className={styles.formIcon} />}
                        placeholder="Email address"
                        bordered={false}
                        defaultValue={email}
                        onChange={handleEmail}
                    />
                    <Divider className={styles.divider} />
                    <Input
                        type={'text'}
                        prefix={<BiUser className={styles.formIcon} />}
                        placeholder="Username"
                        bordered={false}
                        defaultValue={username}
                        onChange={handleUsername}
                    />
                    <Divider className={styles.divider} />
                    <Input
                        type={passwordHash}
                        prefix={<BiLock className={styles.formIcon} />}
                        suffix={show ?
                            <BsEyeSlash className={styles.eyeIcon} onClick={showEye} /> :
                            <BsEye className={styles.eyeIcon} onClick={showEye} />}
                        placeholder="Password"
                        bordered={false}
                        defaultValue={password}
                        onChange={handlePassword}
                    />
                    <Divider className={styles.divider} />
                    <Input
                        type={passwordHash}
                        prefix={<BiLock className={styles.formIcon} />}
                        suffix={show ?
                            <BsEyeSlash className={styles.eyeIcon} onClick={showEye} /> :
                            <BsEye className={styles.eyeIcon} onClick={showEye} />}
                        placeholder="Re-Password"
                        bordered={false}
                        defaultValue={repassword}
                        onChange={handleRepassword}
                    />
                    <Divider className={styles.divider} />
                    <Input
                        type={'contact'}
                        prefix={<span className={styles.telephoneSuffix}><FormFlag />+233 </span>}
                        placeholder="Telephone"
                        bordered={false}
                        defaultValue={contact}
                        onChange={handleContact}
                    />
                </Input.Group>
                <Button className={styles.registerBtn} title='SignUp' onClick={handleSubmit}>
                    <BsCheck2 className={styles.registerBtnIcon} />
                </Button>
            </div>
            <div className={styles.otherLinks}>
                <Text className={styles.login}>
                    Already have an account? &nbsp;
                    <Link href={'/login'}><a><Text style={{ color: '#24E9A3', textDecoration: 'underline', fontWeight: 600 }}>Login</Text></a></Link>
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