import React, { useState } from 'react'
import { FaUser, FaLock, FaAddressCard, FaSearch } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Card, Row, Col, Button, Input, Typography, Skeleton } from 'antd'

import styles from '../../../styles/admin-styles/settings-styles/update.module.css'


const { Title, Text } = Typography
const { Password } = Input

const UpdateForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [searchResults, setSearchResults] = useState('')
    const [disabled, setDisabled] = useState(true)

    console.log(name + '\n' + email + '\n' + username + '\n' + password)
    return (
        <>
            <Row gutter={[20, 52]} align={'middle'} justify={'center'} style={{ marginBottom: 30 }}>
                <Col span={24} className={styles.searchBar}>
                    <Input placeholder='Search agent here' prefix={<FaSearch color='#888' size={18} style={{ marginRight: 10 }} />} className={styles.searchInput} onChange={(e) => { setSearchResults(e.target.value) }} />
                    <Button className={styles.searchBtn}>Search</Button>
                </Col>
            </Row>
            <Row gutter={[52, 2]} style={{ marginBottom: 30 }}>
                {
                    searchResults === '' ?
                        <Col xs={24} lg={12}>
                            <Title level={4} style={{ color: '#ccc' }}>No search results, Please search ... </Title>
                            <Skeleton loading={true} active avatar />
                        </Col> :
                        <Col xs={24} lg={12}>
                            <Card hoverable className={[styles.userCard, 'userCard']}>
                                <div className={styles.icon}><FaUser size={25} color={'#fff'} /></div>
                                <Text className={styles.username}>{searchResults}</Text>
                                <Button className={styles.activateEdit} onClick={() => {setDisabled(false)}}>Edit</Button>
                            </Card>
                        </Col>
                }
                <Col xs={24} lg={12} className={styles.form}>
                    <Card className={[styles.card, 'registerCard']}>
                        <Row justify='center' align='midde' gutter={[20, 20]} className={styles.cardRow}>
                            <Col span={24} style={{ textAlign: 'center' }}><Title level={4} style={{ color: '#00115b', fontWeight: 600 }}>Edit Agent</Title></Col>
                            <Col span={24}>
                                <Input
                                    prefix={<FaAddressCard color='#91A2B8' size={16} style={{ marginRight: 10 }} />}
                                    type={'text'}
                                    placeholder='Agent Name'
                                    value={name}
                                    className={styles.input}
                                    onChange={(e) => setName(e.target.value)}
                                    disabled={disabled}
                                />
                            </Col>
                            <Col span={24}>
                                <Input
                                    prefix={<MdEmail color='#91A2B8' size={16} style={{ marginRight: 10 }} />}
                                    type={'email'}
                                    placeholder='Email Address'
                                    value={email}
                                    className={styles.input}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={disabled}
                                />
                            </Col>
                            <Col span={24}>
                                <Input
                                    prefix={<FaUser color='#91A2B8' size={16} style={{ marginRight: 10 }} />}
                                    type={'text'}
                                    placeholder='Username'
                                    value={username}
                                    className={styles.input}
                                    onChange={(e) => setUsername(e.target.value)}
                                    disabled={disabled}
                                />
                            </Col>
                            <Col span={24}>
                                <Password
                                    prefix={<FaLock color='#91A2B8' size={16} style={{ marginRight: 10 }} />}
                                    placeholder='Password'
                                    value={password}
                                    className={styles.input}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={disabled}
                                />
                            </Col>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button className={styles.btn} disabled={disabled}>Update</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UpdateForm