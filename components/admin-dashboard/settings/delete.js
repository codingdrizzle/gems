import React, { useState } from 'react'
import { Row, Col, Button, Card, Typography, Input } from 'antd'
import { FaUser, FaSearch, FaTrash } from 'react-icons/fa'
import styles from '../../../styles/admin-styles/settings-styles/delete.module.css'

const { Text } = Typography

const DeleteForm = () => {
    const [searchResults, setSearchResults] = useState('')
    const users = ['Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith', 'Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith', 'Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith', 'Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith']
    return (
        <Row gutter={[20, 20]}>
            <Col span={24} className={styles.searchBar}>
                <Input placeholder='Search agent here' prefix={<FaSearch color='#888' size={18} style={{ marginRight: 10 }} />} className={styles.searchInput} onChange={(e) => { setSearchResults(e.target.value) }} />
                <Button className={styles.searchBtn}>Search</Button>
            </Col>

            {
                users.map((user, _) => {
                    return (
                        <Col key={_} xs={24} md={12} lg={8}>
                            <Card hoverable className={[styles.userCard, 'userCard']}>
                                <div style={{ width: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                                <div className={styles.icon}><FaUser size={25} color={'#fff'} /></div>
                                <Text className={styles.username}>{user}</Text>
                                </div>
                                <div style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
                                <FaTrash className={styles.deleteUser} size={20} />
                                </div>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default DeleteForm