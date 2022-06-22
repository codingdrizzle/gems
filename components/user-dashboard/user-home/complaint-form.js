import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { IoIosAttach } from 'react-icons/io'
import { Col, Row, Card, Input, Typography, Modal, Select, Button, message, Upload, Divider } from 'antd'

import styles from '../../../styles/user-home-styles/content.module.css'

const { Text } = Typography
const { Option } = Select
const { TextArea } = Input

const ModalForm = ({ visible, onClose }) => {
    const [optionValue, setOptionValue] = useState('')
    const [textArea, setTextArea] = useState('')
    const handleChange = (value) => {
        setOptionValue(value)
        console.log(value)
    }
    console.log(optionValue)

    const props = {
        name: 'file',
        action: '',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },

        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            strokeWidth: 3,
            format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
    };

    return (
        <Modal
            closable={true}
            // centered={true}
            visible={visible}
            onCancel={onClose}
            okButtonProps={null}
            footer={null}
            className={styles.modal}
            closeIcon={<GrFormClose color={'red'} size={50} />}
        >
            <Row gutter={[0, 0]} justify={'middle'} align={'center'} style={{}}>
                <Col span={24} xs={24}>
                    <Card className={styles.formCard}>
                        <Row>
                            <Col span={24}><Text className={styles.formHeader}>Lodge a complaint here</Text></Col>
                        </Row>
                        <Row style={{ marginTop: 30 }} gutter={[0, 5]}>
                            <Col span={24}><Text className={styles.formLabel}>Select category</Text></Col>
                            <Col span={24}>
                                <Select
                                    placeholder={'Select'}
                                    size={'large'}
                                    value={optionValue}
                                    className={styles.selectOption}
                                    onChange={handleChange}
                                >
                                    <Option value="Ghana Police Service">Ghana Police Service</Option>
                                    <Option value="Ghana Fire Service">Ghana Fire Service</Option>
                                    <Option value="Ghana Ambulance Service">Ghana Ambulance Service</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30 }} gutter={[0, 5]}>
                            <Col span={24}><Text className={styles.formLabel}>What happened?</Text></Col>
                            <Col span={24}>
                                <TextArea placeholder={'Describe your complaint in this section.'}
                                    className={styles.formInput} value={textArea} onChange={(e) => {
                                        setTextArea(e.value)
                                        console.log(e.value)
                                    }} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30 }} gutter={[0, 5]}>
                            <Col span={24}>
                                <Upload {...props} style={{width: 'fit-content'}}>
                                    <Button className={styles.attachBtn}>
                                        <Text className={styles.attachBtnText}> Attach a file. [ Image | Video | Audio ]</Text>
                                        <IoIosAttach style={{ transform: 'rotate(90)'}}/>
                                    </Button>
                                </Upload>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

        </Modal>
    )
}

export default ModalForm