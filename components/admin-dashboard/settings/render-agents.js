import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { FaUser } from 'react-icons/fa'
import styles from '../../../styles/admin-styles/settings-styles/agents.module.css'

const users = ['Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith', 'Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith', 'Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith', 'Francis Buabin Owusu', 'Kidi Hayford', 'Sarfo Kunadu', 'Coding Judith']
const { Text } = Typography
const RenderAgents = () => {
    return (
        <Row gutter={[20,20]}>
            {
                users.map((user, _) => {
                    return(
                        <Col key={_} xs={24} lg={8}>
                            <Card className={[styles.userCard,'userCard']}>
                                <div className={styles.icon}><FaUser size={25} color={'#fff'}/></div>
                                <Text className={styles.username}>{user}</Text>                                    
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default RenderAgents