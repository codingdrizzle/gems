import React, { useState } from 'react'
import { Modal, Button, Row, Col, Typography, Divider, Input } from 'antd'
import styles from '../../../styles/user-styles/user-settings-styles/form-card.module.css'


const { Title, Text } = Typography

const Confirm = ({ visibility, onClose, onConfirm, email }) => {
    const [confirmText, setConfirmText] = useState('')

    return (
        <Modal footer={null} visible={visibility} closable={false}>
            <Row style={{ padding: 20 }} gutter={[0, 5]}>
                <Col xs={24}>
                    <Title style={{ color: '#e92424cc' }} level={4}>Confirm account termination.</Title>
                </Col>
                <Divider style={{ margin: 0 }} />
                <Col xs={24}>
                    <Text style={{ color: '#00000080', fontSize: 16 }}>To confirm your account termination, please type <strong style={{ color: '#e92424cc' }}>{email}</strong> in the box below.</Text>
                </Col>
                <Col xs={24}>
                    <Input type={'text'} value={confirmText} className={styles.deleteInput} onChange={(e) => setConfirmText(e.target.value)} />
                </Col>
                <Col xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                    <Button onClick={onConfirm} className={styles.confirmDeleteBtn} disabled={confirmText === email ? false : true}>Done</Button>
                    <Button onClick={() => {
                        setConfirmText('')
                        onClose()
                    }} className={styles.confirmCancelBtn}>Cancel</Button>
                </Col>
            </Row>
        </Modal>
    )
}

export default Confirm