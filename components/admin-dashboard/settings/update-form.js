import React, { useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { FaUser, FaLock, FaAddressCard, FaSearch } from 'react-icons/fa'
import { MdEmail, MdEdit } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiShieldStarFill } from 'react-icons/ri'
import { Card, Row, Col, Button, Input, Typography, Skeleton, message } from 'antd'
import { validateAgent } from '../../../helpers/form-validation'
import styles from '../../../styles/admin-styles/settings-styles/update.module.css'


const { Title, Text } = Typography
const { Password } = Input

const UpdateForm = ({agents}) => {
    const [name, setName] = useState('')
    const [rank, setRank] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [contact, setContact] = useState('')
    const [searchResults, setSearchResults] = useState('')
    const [disabled, setDisabled] = useState(true)

    const data = {
        name,
        rank,
        username,
        id: password,
        contact
    }

    const reset = () => {
        setName('')
        setRank('')
        setUsername('')
        setPassword('')
        setContact('')
        setSearchResults('')
        setDisabled(true)
    }

    const handleChange = (e) => {
        for(let i = 0; i < agents.length; i++){
            if (e.target.value.toLowerCase() ===  agents[i].name.toLowerCase()){
                console.log(i)
                setSearchResults(agents[i].name)
            }else{
                console.log(i)

            }
        }
    }

    const handleUpdate = async () => {
        const { error, value } = validateAgent.validate({ Name: name, Rank: rank, Username: username, Contact: contact, Id: password })

        if (error) {
            message.error(error.message)
        } else {
            await axios.patch('/api/agents', data)
                .then(res => {
                    message.success(res.data.message)
                    reset()
                })
        }
    }

    return (
        <>
            <Row gutter={[20, 52]} align={'middle'} justify={'center'} style={{ marginBottom: 30 }}>
                <Col span={24} className={styles.searchBar}>
                    <Input placeholder='Search agent here' prefix={<FaSearch color='#888' size={18} style={{ marginRight: 10 }} />} className={styles.searchInput} onChange={handleChange} />
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
                                <div style={{width: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 15}}>
                                    <div className={styles.icon}><FaUser size={25} color={'#fff'} /></div>
                                    <Text className={styles.username}>{searchResults}</Text>
                                </div>
                                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Button className={styles.activateEdit} onClick={() => { setDisabled(false) }}> <MdEdit size={20} /></Button>
                                </div>
                            </Card>
                        </Col>
                }
                <Col xs={24} lg={12} className={styles.form}>
                    <Card className={[styles.card, 'registerCard']}>
                        <Row justify='center' align='midde' gutter={[20, 20]} className={styles.cardRow}>
                            <Col span={24} style={{ textAlign: 'center' }}><Title level={4} style={{ color: '#00115b', fontWeight: 600 }}>Edit Agent</Title></Col>
                            <Col span={24}>
                                <Input disabled={disabled} prefix={<FaAddressCard color='#91A2B8' size={16} style={{ marginRight: 10 }} />} type={'text'} placeholder='Agent Name' value={name} className={styles.input} onChange={(e) => setName(e.target.value)} />
                            </Col>
                            <Col span={24}>
                                <Input disabled={disabled} prefix={<RiShieldStarFill color='#91A2B8' size={16} style={{ marginRight: 10 }} />} type={'text'} placeholder='Position/Rank' value={rank} className={styles.input} onChange={(e) => setRank(e.target.value)} />
                            </Col>
                            <Col span={24}>
                                <Input disabled={disabled} prefix={<BsFillTelephoneFill color='#91A2B8' size={16} style={{ marginRight: 10 }} />} type={'text'} placeholder='Contact' value={contact} className={styles.input} onChange={(e) => setContact(e.target.value)} />
                            </Col>
                            <Col span={24}>
                                <Input disabled={disabled} prefix={<FaUser color='#91A2B8' size={16} style={{ marginRight: 10 }} />} type={'text'} placeholder='Username' value={username} className={styles.input} onChange={(e) => setUsername(e.target.value)} />
                            </Col>
                            <Col span={24} style={{ display: 'flex', gap: 10 }}>
                                <Password disabled={disabled} type={'text'} prefix={<FaLock color='#91A2B8' size={16} style={{ marginRight: 10 }} />} placeholder='Agent ID' value={password} className={styles.input} style={{ width: '60%' }} />
                                <Button disabled={disabled} onClick={() => setPassword(nanoid(6))} style={{ width: '40%' }} >Generate ID</Button>
                            </Col>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button className={styles.btn} disabled={disabled} onClick={handleUpdate}>Update</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UpdateForm