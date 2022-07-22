import React, { useState } from 'react'
import { Row, Col, Card, Input, Typography, Button } from 'antd'
import { MdEdit, MdSave } from 'react-icons/md'
import styles from '../../../styles/user-styles/user-settings-styles/form-card.module.css'

const { Title, Text } = Typography

const data = {
    Firstname: "Francis",
    Lastname: "Owusu",
    "Email Address": "codingfrancis100@gmail.com",
    Username: "codingdrizzle",
    Password: "theBigBang",
    Contact: "0550906616",
}

const FormCard = () => {
    // States
    const [disabled, setDisabled] = useState(true)

    const transformed = Object.entries(data)

    return (
        <Row justify='center' align='middle'>
            <Col xs={24} md={18} lg={18}>
                <Card className={styles.card}>
                    <Row style={{ marginBottom: 10 }}>
                        <Col span={24}><Title className={styles.title}>Account Settings</Title></Col>
                    </Row>
                    <Row gutter={[0, 48]}>
                        <Col xs={20} lg={12}>
                            <Title className={styles.subTitle1}>User Information</Title>
                            {
                                transformed.map((item, index) => {
                                    return (
                                        <Row key={index} >
                                            <Col span={24}>
                                                <Text className={styles.label}>{item[0]}</Text>
                                            </Col>
                                            <Col xs={24} md={20} className={styles.inputWrapper}>
                                                <Input defaultValue={item[1]} disabled={disabled} className={styles.input} id={index} style={{ color: disabled ? '#789' : '' }} />
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                            <Row>
                                <Col xs={24} md={20} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {disabled ?
                                        <Button className={styles.editBtn} onClick={() => setDisabled(!disabled)}>
                                            <MdEdit size={25}/><Text>Edit</Text> 
                                        </Button> :
                                        <Button className={styles.saveBtn} onClick={() => setDisabled(!disabled)}>
                                            <MdSave size={25} color={'rgba(0, 188, 109, 1)'} />
                                            <Text style={{ color: 'rgba(0, 188, 109, 1)'}}>Save Changes</Text> 
                                        </Button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={20} lg={12}>
                            <Title className={styles.subTitle2}>Account Termination</Title>

                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 30 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    <Text className={styles.warningText}>This action terminates your membership with GEMS. After you perform this action, you may not be able to access this user account anymore.</Text>
                                    <Text className={styles.warningText}>If you wish to <span style={{ color: 'rgba(233, 36, 36, 0.8)', fontWeight: 800 }}>delete</span> your account, click the button below.</Text>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button className={styles.deleteBtn}>Delete Account</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default FormCard