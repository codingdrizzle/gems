import {useRouter} from 'next/router'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import bcrypt from 'bcryptjs'
import {Row, Col, Card, Input, Typography, Button, Modal, message} from 'antd'
import {MdEdit, MdSave} from 'react-icons/md'
import styles from '../../../styles/user-styles/user-settings-styles/form-card.module.css'
import {userUpdateSchema} from '../../../helpers/form-validation'
import Confirm from './confirm-modal'
import {jwt_token, tokenData} from "../../../store";
import {useAtomValue, useSetAtom} from "jotai";
import {API} from "../../../api/axios-client";

const {Title, Text} = Typography
const {Password} = Input

let data = {}
const FormCard = () => {
    const user = useAtomValue(tokenData);
    // UseRouter
    const router = useRouter()
    // States
    const [disabled, setDisabled] = useState(true)
    const [show, setShow] = useState(false)
    const [visible, setVisible] = useState(false)

    // States
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [contact, setContact] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validateContact = () => {
        if (contact[0] === 0) {
            return message.error('Your contact should not begin with "0".')
        }
        if (contact.includes('+233')) {
            return message.error('Contact must not include "+233"')
        }
        if (contact.length !== 9) {
            return message.error('Contact not valid.')
        }
        return true
    }


    const [data, setData] = useState({})
    const handleSubmit = async () => {
        setDisabled(!disabled);
        if (firstname !== '') {
            user.firstname = firstname
        }
        if (lastname !== '') {
            user.lastname = lastname
        }
        if (email !== '') {
            user.email = email
        }
        if (username !== '') {
            user.username = username
        }
        if (contact !== '') {
            user.contact = contact
        }
        if (Object.keys(user).length !== 0) {
            setVisible(!visible)
        } else {
            message.warning('No changes yet...')
        }
    }
    const clearToken = useSetAtom(jwt_token)
    const trigger = async () => {
        const isMatch = await bcrypt.compare(confirmPassword, user?.password)
        if (confirmPassword === '') {
            message.error('Please enter your password.')
        } else if (isMatch) {
            try {
                const editUser = await API.patch(`/user/${user?._id}`, data)
                if (editUser.status === 200) {
                    message.success('Account details updated.')
                    clearToken('')
                    return router.push('/login')
                }
            } catch (e) {
                if (e) message.error('Something went wrong, try again')
            }
        } else {
            message.error('Password incorrect!!')
        }
    }

    const handleConfirm = async () => {
        try {
            const deleteUser = await API.delete(`/user/${user._id}`)
            if (deleteUser.status === 200) return router.replace('/')
        } catch (e) {
            if (e) message.error(e.message)
        }
    }

    return (
        <Row justify='center' align='middle'>
            <Col xs={24} md={18} lg={18}>
                <Card className={styles.card}>
                    <Row style={{marginBottom: 10}}>
                        <Col span={24}><Title className={styles.title}>Account Settings</Title></Col>
                    </Row>
                    <Row gutter={[0, 48]}>
                        <Col xs={20} lg={12}>
                            <Title className={styles.subTitle1}>User Information</Title>
                            <Row>
                                <Col span={24}>
                                    <Text className={styles.label}>Firstname</Text>
                                </Col>
                                <Col xs={24} md={20} className={styles.inputWrapper}>
                                    <Input type={'text'} placeholder={user?.firstname} disabled={disabled}
                                           onChange={(e) => setFirstname(e.target.value)} className={styles.input}
                                           style={{color: disabled ? '#789' : ''}}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Text className={styles.label}>Lastname</Text>
                                </Col>
                                <Col xs={24} md={20} className={styles.inputWrapper}>
                                    <Input type={'text'} placeholder={user?.lastname} disabled={disabled}
                                           onChange={(e) => setLastname(e.target.value)} className={styles.input}
                                           style={{color: disabled ? '#789' : ''}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Text className={styles.label}>Email Address</Text>
                                </Col>
                                <Col xs={24} md={20} className={styles.inputWrapper}>
                                    <Input type={'text'} placeholder={user?.email} disabled={disabled}
                                           onChange={(e) => setEmail(e.target.value)} className={styles.input}
                                           style={{color: disabled ? '#789' : ''}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Text className={styles.label}>Username</Text>
                                </Col>
                                <Col xs={24} md={20} className={styles.inputWrapper}>
                                    <Input type={'text'} placeholder={user?.username} disabled={disabled}
                                           onChange={(e) => setUsername(e.target.value)} className={styles.input}
                                           style={{color: disabled ? '#789' : ''}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Text className={styles.label}>Contact</Text>
                                </Col>
                                <Col xs={24} md={20} className={styles.inputWrapper}>
                                    <Input type={'text'} placeholder={'0' + user?.contact} disabled={disabled}
                                           onChange={(e) => setContact(e.target.value)} className={styles.input}
                                           style={{color: disabled ? '#789' : ''}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} md={20}
                                     style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {disabled ?
                                        <Button className={styles.editBtn} onClick={() => setDisabled(!disabled)}>
                                            <MdEdit size={25}/><Text>Edit</Text>
                                        </Button> :
                                        <Button className={styles.saveBtn} onClick={handleSubmit}>
                                            <MdSave size={25} color={'rgba(0, 188, 109, 1)'}/>
                                            <Text style={{color: 'rgba(0, 188, 109, 1)'}}>Save Changes</Text>
                                        </Button>
                                    }
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={20} lg={12}>
                            <Title className={styles.subTitle2}>Account Termination</Title>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 30
                            }}>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                                    <Text className={styles.warningText}>This action terminates your membership with
                                        GEMS. After you perform this action, you may not be able to access this user
                                        account anymore.</Text>
                                    <Text className={styles.warningText}>If you wish to <span
                                        style={{color: 'rgba(233, 36, 36, 0.8)', fontWeight: 800}}>delete</span> your
                                        account, click the button below.</Text>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Button className={styles.deleteBtn} onClick={() => setShow(true)}>Delete
                                        Account</Button>
                                </div>
                                <Confirm visibility={show} onClose={() => setShow(false)} onConfirm={handleConfirm}
                                         email={user?.email}/>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>

            <Modal footer={null} visible={visible} closable={false}>
                <Row style={{padding: 20}} gutter={[0, 5]}>
                    <Col xs={24}>
                        <Title style={{color: '#e92424cc'}} level={4}>Enter password to make changes</Title>
                    </Col>
                    <Col xs={24}>
                        <Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                  className={styles.deleteInput}/>
                    </Col>
                    <Col xs={24} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                        marginTop: 20
                    }}>
                        <Button onClick={trigger} className={styles.confirmDeleteBtn}>Done</Button>
                        <Button onClick={() => {
                            setVisible(false)
                            setConfirmPassword('')
                        }} className={styles.confirmCancelBtn}>Cancel</Button>
                    </Col>
                </Row>
            </Modal>

        </Row>
    )
}

export default FormCard