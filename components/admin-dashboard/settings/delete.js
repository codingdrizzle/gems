import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col, Button, Card, Typography, Input, Modal, Skeleton, message } from 'antd'
import { FaUser, FaSearch, FaTrash } from 'react-icons/fa'
import styles from '../../../styles/admin-styles/settings-styles/delete.module.css'

const { Title, Text } = Typography

const DeleteForm = ({agents}) => {
    // States
    const [searchResults, setSearchResults] = useState('')
    const [visible, setVisible] = useState(false)
    const [user, setUser] = useState('')

    // Router
    const router = useRouter()

    const handleClick = (user) => {
        setUser(user)
        setVisible(true)
    }

    const handleConfirm = async () => {
        await axios.delete(`/api/agents/?id=${user._id}`).then(res => {

                console.log(res.data)
                message.success(`${user.name} removed.`,{duration: 10},() => router.prefetch())
        }).catch(err => message.error(err.response.data.message))
        setVisible(false)
    } 
    
    return (
        <Row gutter={[20, 20]}>
            <Col span={24} className={styles.searchBar}>
                <Input placeholder='Search agent here' prefix={<FaSearch color='#888' size={18} style={{ marginRight: 10 }} />} className={styles.searchInput} onChange={(e) => { setSearchResults(e.target.value) }} />
                <Button className={styles.searchBtn}>Search</Button>
            </Col>

            {
                Object.keys(agents).length === 0 ?
                    <Col xs={24} lg={12}>
                        <Title level={4} style={{ color: '#ccc' }}>No Agents ... </Title>
                        <Skeleton loading={true} active avatar />
                    </Col> :

                agents.filter(item => {
                    if(searchResults == ''){
                        return item
                    } else if (item.name.toLowerCase().includes(searchResults.toLowerCase())) {
                        return item
                    }
                }).map((user, _) => {
                    return (
                        <Col key={_} xs={24} md={12} lg={8}>
                            <Card hoverable className={[styles.userCard, 'userCard']}>
                                <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                                <div className={styles.icon}><FaUser size={25} color={'#fff'} /></div>
                                <Text className={styles.username}>{user.name}</Text>
                                </div>
                                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
                                <FaTrash className={styles.deleteUser} size={20} onClick={() => handleClick(user)}/>
                                </div>
                            </Card>
                        </Col>
                    )
                })
            }
            <Modal footer={false} visible={visible} closeIcon={<></>} closable={true}>
                <Row gutter={[10,10]} style={{padding: 20}}>
                    <Col span={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Title level={4} style={{ color: '#e92424cc'}}>Confirm</Title>
                    </Col>
                    <Col span={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Are you sure you want to delete <b>{user.name}</b></Text>
                    </Col>
                    <Col span={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20}}>
                        <Button onClick={handleConfirm} className={styles.confirmBtn}>Confirm</Button>
                        <Button onClick={() => setVisible(false)} className={styles.cancelBtn}>Cancel</Button>
                    </Col>
                </Row>
            </Modal>
        </Row>
    )
}

export default DeleteForm