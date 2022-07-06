import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GrFormClose } from 'react-icons/gr'
import { IoIosAttach } from 'react-icons/io'
import { Col, Row, Card, Input, Typography, Modal, Select, Button, message, Upload, Divider, Checkbox } from 'antd'
import { formCategory, formDescription, formAttach, locationCheck, locationDescription, swearCheck } from '../../../states/actions'
import styles from '../../../styles/user-styles/user-home-styles/content.module.css'
const NewsAPI = require('newsapi');

const { Text } = Typography
const { Option } = Select
const { TextArea } = Input

const ModalForm = ({ visible, onClose }) => {
    const states = useSelector(state => state)
    const { FormCategory, FormDescription, FormAttachFile, FormCheckLocation, FormDescribeLocation, FormSwearCheck } = states
    const dispatcher = useDispatch()

    // Refs
    const categoryRef = useRef(null)
    const descriptionRef = useRef(null)
    const locDescriptionRef =  useRef(null)
    console.log(locDescriptionRef.current)

    useEffect(() => {
    }, [])
    const handleFormSubmit = () => {
        alert('form was successfully submited')
        // console.log(FormCategory)
        // console.log(FormDescription)
        // console.log(FormAttachFile)
        // console.log(FormCheckLocation)
        // console.log(FormDescribeLocation)
        // console.log(FormSwearCheck)
    }
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
            if (info.fileList.length){

            }
            if(info.file){
                dispatcher(formAttach(info.file))
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
            centered={true}
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
                        <Row style={{ marginTop: 30, }} gutter={[0, 5]}>
                            <Col span={24}><Text className={styles.formLabel}>Select category</Text></Col>
                            <Col span={24}>
                                <Select
                                    fieldNames={{ label: 'Select', value: 'value' }}
                                    placeholder={'Select'}
                                    size={'large'}
                                    value={FormCategory}
                                    className={styles.selectOption}
                                    ref={categoryRef}
                                    // onChange={() => dispatcher(formCategory(categoryRef.current.value))}
                                >
                                    <Option value="Ghana Police Service">Ghana Police Service</Option>
                                    <Option value="Ghana Fire Service">Ghana Fire Service</Option>
                                    <Option value="Ghana Ambulance Service">Ghana Ambulance Service</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30, }} gutter={[0, 5]}>
                            <Col span={24}><Text className={styles.formLabel}>What happened?</Text></Col>
                            <Col span={24}>
                                <TextArea 
                                    placeholder={'Describe your complaint in this section.'}
                                    className={styles.formInput} 
                                    value={FormDescription} 
                                    ref={descriptionRef}
                                    onChange={() => dispatcher(formDescription(descriptionRef.current.resizableTextArea.textArea.value))}
                                    />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30, }} gutter={[0, 17]}>
                            <Col span={24}>
                                <Upload {...props}
                                    capture={'environment'}
                                    accept={'.mp4,.mkv,.png,.jpeg,.jpg,.gif'}
                                >
                                    <Button className={styles.attachBtn}>
                                        <Text className={styles.attachBtnText}> Attach a file. <span className={styles.vanish}>[ Image | Video ]</span></Text>

                                        <span style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <Divider
                                                plain={false} type='vertical'
                                                style={{ borderWidth: 2, borderColor: '#91A2B8', height: 43, padding: 0, marginTop: 2 }} />
                                            <IoIosAttach style={{ transform: 'rotate(90deg)', fontSize: 30, color: 'rgba(0,0,0,0.5)' }} />
                                        </span>
                                    </Button>
                                </Upload>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30, }} gutter={[0, 17]}>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23 }}>
                                <Checkbox checked={FormCheckLocation}
                                    onChange={() => { dispatcher(locationCheck())}}
                                    className={styles.checkbox} />
                                <Text className={styles.checkText}>Allow place of urgency to be tracked automatically based on your current location.</Text>
                            </Col>
                            <Col span={24}>
                                <Text className={styles.formLabel}>Or, describe location yourself</Text>
                                <Input
                                    placeholder={'Address | Street names | Landmarks ... etc'}
                                    className={styles.desc}
                                    value={FormDescribeLocation}
                                    ref={locDescriptionRef}
                                    onChange={() => dispatcher(locationDescription(locDescriptionRef.current.input.value))}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Divider type='horizontal'
                                    style={{ marginTop: 30, border: '1px solid rgba(0,0,0,0.1)' }}
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 10 }} gutter={[0, 17]}>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23 }}>
                                <Checkbox checked={FormSwearCheck}
                                    className={styles.checkbox} 
                                    onChange={() => { dispatcher(swearCheck())}}
                                    />
                                <Text className={styles.checkText}>I hereby agree that this complaint is legitimate and is a confidential issue that needs to be addressed immediately.</Text>
                            </Col>
                            <Col span={24}>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23 }}>
                                    <Checkbox checked={FormSwearCheck}
                                        className={styles.checkbox} 
                                        onChange={() => { dispatcher(swearCheck())}}
                                        />
                                    <Text className={styles.checkText}>I agree to face the penalty or pay a fine if this complaint is fake.</Text>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 40, }} gutter={[0, 17]}>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className={styles.submitBtn} onClick={handleFormSubmit}>Submit</Button>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>

        </Modal>
    )
}

export default ModalForm