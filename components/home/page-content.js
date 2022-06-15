import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import { Morning, Afternoon, Evening } from '../../commons/suns'
import styles from '../../styles/home-styles/content.module.css'
import Logo from '../../commons/logo'
import { LoginBtn, SignUpBtn } from '../button'
import { Times } from '../../helpers/times'
import colors from '../../styles/colors.module.css'
import { Abumlance, Fire, Nadmo, Police } from '../../commons/partners'

const { Text } = Typography;

const PageContent = () => {
    const [greeting, setGreeting] = useState('')
    const [value, setValue] = useState(50)
    const [sun, setSun] = useState(<></>)


    useEffect(() => {
       setGreeting(Times().greeting)
       setSun(Times().sun)
    }, [Times()])

    return (
        <>
            {/* Header Section */}
            <Row className={styles.motherGap}>
                <Col xs={24} lg={12}>
                    <Row>
                        <Col xs={24}>
                            <Text className={styles.headerTitle}>Hello there,</Text>
                            <Text className={styles.headerTitle}>Good {greeting} {sun}</Text>
                        </Col>
                        <Col xs={24} className={styles.childGap}>
                            <Text className={styles.headerSubTitle}>Weclome to</Text>
                            <Text className={[styles.headerSubTitle, colors.primaryTextColor1]}>Ghana Emergency Services</Text>
                        </Col>
                        <Col xs={24} className={styles.childGap} style={{ maxWidth: 673 }}>
                            <Text className={styles.headerText}>GEMS is a platform that effectively links to the emergency authorities of Ghana, and aid the people to lodge urgent complaints and reports.</Text>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} lg={12} className={styles.pageLogo}>
                    <Logo value={350} />
                </Col>
            </Row>
            {/* Login and Signup Section */}
            <Row className={styles.motherGap}>
                <Col xs={24} className={styles.btnContainer}>
                    <Link href={'/login'}>
                        <a>
                            <LoginBtn btnProps={styles.btn} btnColor={colors.loginBtn} />
                        </a>
                    </Link>
                    <Link href={'/register'}>
                        <a>
                            <SignUpBtn btnProps={styles.btn} btnColor={colors.signUpBtn} />
                        </a>
                    </Link>
                </Col>
            </Row>
            {/* Partners Section */}
            <Row className={styles.motherGap}>
                <Col xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text className={[styles.partnerText, colors.primaryTextColor2]}>Partners</Text>
                </Col>
                <Col xs={24} style={{marginTop: 15}}>
                    <Row align={'center'} justify={'center'}>
                        <Col span={4} className={styles.partnerLogo}>
                            <Police value={100}/>
                        </Col>
                        <Col span={4} className={styles.partnerLogo}>
                            <Fire value={100}/>
                        </Col>
                        <Col span={4} className={styles.partnerLogo}>
                            <Abumlance value={100}/>
                        </Col>
                        <Col span={4} className={styles.partnerLogo}>
                            <Nadmo value={100}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
}

export default PageContent