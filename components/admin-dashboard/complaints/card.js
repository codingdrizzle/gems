import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Row, Col, Collapse, Typography, Button } from 'antd'
import { FaCheckCircle } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'

import styles from '../../../styles/admin-styles/complaints-styles/complaints.module.css'

const Card = ({ borderColor, index, bgColor, icon, details, identity }) => {
    const { Panel } = Collapse
    const { Title } = Typography

    // useRouter
    const router = useRouter()

    return (
        <Col xs={24}>
            <Collapse className={styles.collapse} style={{ borderLeft: `10px solid ${borderColor}`, background: bgColor }}>
                {/* <Panel header={title.substring(0, 20) + '...'} key={index}> */}
                <Panel header={'Complaint Content'} key={index} extra={icon}>
                    <Row gutter={[0, 20]}>
                        <Col xs={24} lg={18}>
                            <Row>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Title level={5}>Content: <span style={{ fontWeight: 'normal' }}>{details.content}</span></Title>
                                </Col>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Title level={5}>To: <span style={{ fontWeight: 'normal' }}>{details.category}</span></Title>
                                </Col>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Title level={5}>Type: <span style={{ fontWeight: 'normal' }}>{details.type}</span></Title>
                                </Col>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Title level={5}>Date: <span style={{ fontWeight: 'normal' }}>{details.date}</span></Title>
                                </Col>
                                <Col span={24} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <Title level={5} style={{ margin: 0 }}>Resolved: </Title>
                                    <span>
                                        {details.resolved ? (<FaCheckCircle size={20} color={'#80E3A8'} />) : <AiFillCloseCircle size={20} color={'#ff000080'} />}
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} lg={6} style={{ display: 'flex', alignItems: 'center' }}>
                            <Link href={'/admin/complaints/' + identity}>
                                <Button title='More details' className={styles.previewBtn} style={{ background: borderColor }}>Preview Complaint</Button>
                            </Link>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </Col>
    )
}

export default Card