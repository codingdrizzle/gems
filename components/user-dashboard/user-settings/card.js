import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSession } from "next-auth/react"
import { Row, Col, Card, Input, Typography, Button, Modal } from 'antd'
import { MdEdit, MdSave } from 'react-icons/md'
import styles from '../../../styles/user-styles/user-settings-styles/form-card.module.css'
import { registerSchema } from '../../../helpers/form-validation'
import Confirm from './confirm-modal'

const { Title, Text } = Typography

const FormCard = () => {
    // UseRouter
    const router = useRouter()
    // States
    const [disabled, setDisabled] = useState(true)
    const [user, setUser] = useState({})
    const [show, setShow] = useState(false)

    // get Session
    const { data: session } = useSession()
    useEffect(() => {
        if (session) {
            axios.get(`/api/users/?id=${session.user.id}`).then(res => {
                // setUser({ Firstname: res.data.firstname, Lastname: res.data.lastname, Email: res.data.email, Username: res.data.username, Contact: res.data.contact })
                setUser(res.data)
            })
        }
    }, [])
    // States
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



    const data = Object.entries(user)

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

    // const handleSubmit = async () => {
    //     const { error, value } = registerSchema.validate({ Firstname: firstname, Lastname: lastname, Email: email, Username: username, Contact: contact });
    //     if (error || validateContact) {
    //         message.error(error.message)
    //     } else {
    //         await axios.post('/api/users', { firstname, lastname, email, username, password, contact })
    //             .then((result) => {
    //                 if (result.data.exist) {
    //                     message.error(result.data.exist)
    //                 } else {
    //                     message.success(result.data.created)
    //                     reset()
    //                     router.push('/login/')
    //                 }
    //             })
    //             .catch((err) => message.error(err.message))

    //     }
    // }


    const handleConfirm = async () => {
       await axios.delete(`/api/users/?id=${session.user.id}`)
        router.replace('/')
    }

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
                            <Row >
                                <Col span={24}>
                                    <Text className={styles.label}>Firstname</Text>
                                </Col>
                                <Col xs={24} md={20} className={styles.inputWrapper}>
                                    <Input type={'text'} defaultValue={user.firstname} disabled={disabled} onChange={handleFirstname} className={styles.input} style={{ color: disabled ? '#789' : '' }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} md={20} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {disabled ?
                                        <Button className={styles.editBtn} onClick={() => setDisabled(!disabled)}>
                                            <MdEdit size={25} /><Text>Edit</Text>
                                        </Button> :
                                        <Button className={styles.saveBtn} onClick={() => setDisabled(!disabled)}>
                                            <MdSave size={25} color={'rgba(0, 188, 109, 1)'} />
                                            <Text style={{ color: 'rgba(0, 188, 109, 1)' }}>Save Changes</Text>
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
                                    <Button className={styles.deleteBtn} onClick={() => setShow(true)}>Delete Account</Button>
                                </div>
                                <Confirm visibility={show} onClose={() => setShow(false)} onConfirm={handleConfirm} email={session.user.email}/>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default FormCard