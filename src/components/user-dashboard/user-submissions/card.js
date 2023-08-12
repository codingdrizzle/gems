import React from 'react'
import { Row, Col, Card, Collapse, Typography } from 'antd'
import { FaCheckCircle } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import styles from '../../../styles/user-styles/user-submissions-styles/card.module.css'

const { Panel } = Collapse
const { Title, Text } = Typography

const SubmissionCard = ({ index, content, category, type, updatedAt, isResolved, borderColor }) => {
    const title = content.length > 20 ? content.substring(0,20) + '...' : content
    const date = updatedAt.split('T')[0]
    const time = updatedAt.split('T')[1].split('.')[0]
    return (
        <Col xs={24}>
            <Collapse className={styles.collapse} style={{ borderLeftColor: isResolved ? '#000000' : '#ff000080' }}>
                <Panel header={title} key={index} extra={<Text style={{ color: '#91A2B8'}}>{date}</Text>}>
                    <Row>
                        <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                            <Title level={5}>Content: <span style={{ fontWeight: 'normal' }}>{content}</span></Title>
                        </Col>
                        <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                            <Title level={5}>To: <span style={{ fontWeight: 'normal' }}>{category}</span></Title>
                        </Col>
                        <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                            <Title level={5}>Type: <span style={{ fontWeight: 'normal' }}>{type}</span></Title>
                        </Col>
                        <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                            <Title level={5}>Date: <span style={{ fontWeight: 'normal' }}>{date}</span></Title>
                        </Col>
                        <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                            <Title level={5}>Time: <span style={{ fontWeight: 'normal' }}>{time}</span></Title>
                        </Col>
                        <Col span={24} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <Title level={5} style={{ margin: 0 }}>Resolved: </Title>
                            <span>
                                {isResolved ? (<FaCheckCircle size={20} color={'#80E3A8'} />) : <AiFillCloseCircle size={20} color={'#ff000080'} />}
                            </span>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </Col>
    )
}

export default SubmissionCard