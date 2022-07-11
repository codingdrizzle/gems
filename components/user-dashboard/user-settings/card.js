import React, { useState, useRef, createRef } from 'react'
import { Row, Col, Card, Input, Typography, Button } from 'antd'
import { MdEdit } from 'react-icons/md'
import styles from '../../../styles/user-styles/user-settings-styles/form-card.module.css'

const { Title, Text } = Typography

const data = {
    firstname : "francis",
    lastname : "fwusu",
    email : "codingfrancis100@gmail.com",
    username : "codingdrizzle",
    password : "theBigBang",
    contact : "055090661",
}
const capitalizeString = (string) => {
    //Just to make sure you are dealing with a string
    const transformed = String(string);
    return transformed.replace(transformed.charAt(0).toUpperCase());
};
const transformObjectToBooleans = (object, defaults = true) => {
    return Object.keys(object).reduce((prev, cur) => {
        prev[cur] = defaults;
        return prev;
    }, {});
};
const FormCard = () => {
    // States
    const [disabled, setDisabled] = useState()
    const [values, setValues] = useState(data);
    const [buttonDisables, setButtonDisables] = useState(transformObjectToBooleans(data));
    const transformed = React.useMemo(() => Object.entries(values), [values]);

    // Refs
    const inputRef = useRef([createRef(), createRef(), createRef(), createRef(), createRef(), createRef()])

    const handleInput = (e) => {
        // console.log(inputRef)
        inputRef.current.input.disabled ? 
        setDisabled(false) : setDisabled(true)
        
    }
    return (
        <Row justify='center' align='middle'>
            <Col xs={24} md={18} lg={18}>
                <Card className={styles.card}>
                    <Row style={{ marginBottom: 10 }}>
                        <Col span={24}><Title className={styles.title}>Account Settings</Title></Col>
                    </Row>
                    <Row gutter={[0,48]}>
                        <Col xs={20} lg={12}>
                            <Title className={styles.subTitle1}>User Information</Title>
                            {
                                transformed.map((item, index) => {
                                    return (
                                        <Row key={index} >
                                            <Col span={24}>
                                                <Text className={styles.label}>{capitalizeString(item[0])}</Text>
                                            </Col>
                                            <Col xs={24} md={20} className={styles.inputWrapper}>
                                                <Input defaultValue={values[item[0]]} disabled={disabled} className={styles.input} id={index} style={{ color: disabled ? '#789' : ''}} ref={inputRef}/>
                                                <Button className={styles.editBtn} onClick={handleInput}><MdEdit size={20} disabled={buttonDisables[item[0]]} /> Edit</Button>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
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