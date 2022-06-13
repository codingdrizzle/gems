import Link from 'next/link'
import React, { useState } from 'react'
import { Row, Col, Typography, Input, Divider, Button } from 'antd'
import { BiUser, BiLock } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'
import { BsEye, BsEyeSlash, BsArrowReturnLeft, BsCardText, BsCheck2} from 'react-icons/bs'
import { FormFlag } from '../../commons/flag'
import styles from '../../styles/register-styles/register-card.module.css'
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
            <Col span={24}><Text className={[styles.registerText, colors.primaryTextColor2]}>Register</Text></Col>
            <Col span={24}>
                <div className={styles.inputArea}>
                    <Input.Group size={'6'}>
                        <Input
                            id={styles.text}
                            type={'text'}
                            prefix={<BsCardText className={styles.formIcon} />}
                            placeholder="First name"
                            bordered={false}
                        />
                        <Divider className={styles.divider} />
                        <Input
                            id={styles.text}
                            type={'text'}
                            prefix={<BsCardText className={styles.formIcon} />}
                            placeholder="Last name"
                            bordered={false}
                        />
                        <Divider className={styles.divider} />
                        <Input
                            id={styles.text}
                            type={'text'}
                            prefix={<GoMail className={styles.formIcon} />}
                            placeholder="Email address"
                            bordered={false}
                        />
                        <Divider className={styles.divider} />
                        <Input
                            id={styles.text}
                            type={'text'}
                            prefix={<BiUser className={styles.formIcon} />}
                            placeholder="Username"
                            bordered={false}
                        />
                        <Divider className={styles.divider} />
                        <Input
                            id={styles.text}
                            type={passwordHash}
                            prefix={<BiLock className={styles.formIcon} />}
                            suffix={show ?
                                <BsEyeSlash className={styles.eyeIcon} onClick={showEye} /> :
                                <BsEye className={styles.eyeIcon} onClick={showEye} />}
                            placeholder="Password"
                            bordered={false}
                        />
                        <Divider className={styles.divider} />
                        <Input
                            id={styles.text}
                            type={passwordHash}
                            prefix={<BiLock className={styles.formIcon} />}
                            suffix={show ?
                                <BsEyeSlash className={styles.eyeIcon} onClick={showEye} /> :
                                <BsEye className={styles.eyeIcon} onClick={showEye} />}
                            placeholder="Password"
                            bordered={false}
                        />
                        <Divider className={styles.divider} />
                        <Input
                            id={styles.text}
                            type={'text'}
                            prefix={<span className={styles.telephoneSuffix}><FormFlag />+233 </span>}
                            placeholder="Telephone"
                            bordered={false}
                        />
                    </Input.Group>
                    <Button className={styles.registerBtn} title='SignUp'>
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