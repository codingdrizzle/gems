import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { GrFormClose } from 'react-icons/gr'
import { IoIosAttach } from 'react-icons/io'
import { IoCloseCircle } from 'react-icons/io5'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Col, Row, Card, Input, Typography, Modal, Select, Button, message, Upload, Divider, Checkbox, Progress } from 'antd'
import { formCategory, formDescription, formAttach, locationCheck, locationDescription, swearCheck } from '../../../states/actions'
import styles from '../../../styles/user-styles/user-home-styles/content.module.css'

const { Text } = Typography
const { Option } = Select
const { TextArea } = Input

const ModalForm = ({ visible, onClose }) => {
    const states = useSelector(state => state)
    const { FormCategory, FormDescription, FormAttachFile, FormCheckLocation, FormDescribeLocation, FormSwearCheck } = states
    const [imageName, setImageName] = useState('')
    const [isDone, setIsDone] = useState(false)
    const [statusIcon, setStatusIcon] = useState()
    const [file, setFile] = useState(null)
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [types, setTypes] = useState([])
    const dispatcher = useDispatch()

    // Refs
    const categoryRef = useRef(null)
    const descriptionRef = useRef(null)
    const locDescriptionRef = useRef(null)

    const handleFileSelect = () => {
        setIsDone(!isDone)
        setFile(document.getElementById('file').files[0])
        setStatusIcon('')
        setImageName(document.getElementById('file').files[0].name)
        setBtnDisabled(false)
    };

    const upLoadImage = () => {
        if (!file) {
            return message.warning('Please attach an image file.')
        } else {

            console.log(file)
            const image = new FormData();
            image.append('file', file);
            image.append('upload_preset', 'gems-images');
            image.append("cloud_name", "dxclgkewn")

            fetch('https://api.cloudinary.com/v1_1/dxclgkewn/image/upload', {
                method: 'POST',
                body: image,
                mode: 'cors'
            })
                .then((res) => res.json())
                .then((data) => {
                    setBtnDisabled(true)
                    dispatcher(formAttach(data.secure_url))
                    setIsDone(true)
                    setStatusIcon(<span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>: <b>Uploaded successfully.</b><BsCheckCircleFill size={20} color={'rgba(0, 200, 81, 1)'} /></span>)
                })
                .catch(() => {
                    setIsDone(false)
                    setStatusIcon(<span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>: <b>Error uploading, try again.</b><IoCloseCircle size={20} color={'#E92424;'} /></span>)
                })
        }
    }

    const handleFormSubmit = () => {
        const complaintData = {
            category: FormCategory,
            content: FormDescription,
            image: FormAttachFile,
            geoLocation: FormCheckLocation,
            descLocation: FormDescribeLocation,
            TnC: FormSwearCheck
        }
        const options = {
            url: '/api/complaints',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: complaintData
        };
        axios(options)
            .then(response => {
                console.log(response.status);
            });
        alert('form was successfully submited')
    }


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
                            <Col span={24}>
                                <Text className={styles.formLabel}>Type</Text>
                                <Input
                                type={'checkbox'}
                                placeholder='my dear'
                                    onChange={(e) => {
                                        if(e.target.checked){
                                            setTypes(prev => [...prev, e.target.placeholder])
                                        }else{
                                            types.pop()
                                            setTypes(prev => prev)
                                        }
                                        console.log(types)
                                    }}
                                    // className={styles.formInput}
                                    // value={FormDescription}
                                    // ref={descriptionRef}
                                    // onChange={() => dispatcher(formDescription(descriptionRef.current.resizableTextArea.textArea.value))}
                                />
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
                            <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
                                <Input id='file' type='file' name='file' hidden={true} onChange={handleFileSelect}></Input>
                                <Button className={styles.attachBtn} onClick={() => { document.getElementById('file').click() }}>
                                    <Text className={styles.attachBtnText}> Attach a file. <span className={styles.vanish}>[ Image | Video ]</span></Text>

                                    <span style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                        <Divider
                                            plain={false} type='vertical'
                                            style={{ borderWidth: 2, borderColor: '#91A2B8', height: 43, padding: 0, marginTop: 2 }} />
                                        <IoIosAttach style={{ transform: 'rotate(90deg)', fontSize: 30, color: 'rgba(0,0,0,0.5)' }} />
                                    </span>
                                </Button>
                                <Button onClick={upLoadImage} disabled={btnDisabled} className={styles.uploadBtn}>Upload</Button>
                            </Col>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Text style={{ fontSize: 15 }}>{imageName}</Text>{isDone ? statusIcon : ''}
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 30, }} gutter={[0, 17]}>
                            <Col span={24} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23 }}>
                                <Checkbox checked={FormCheckLocation} onChange={() => dispatcher(locationCheck())} className={styles.checkbox} disabled={FormDescribeLocation === '' ? false : true} />
                                <Text className={styles.checkText}>Allow place of urgency to be tracked automatically based on your current location.</Text>
                            </Col>
                            <Col span={24}>
                                <Text className={styles.formLabel}>Or, describe location yourself</Text>
                                <Input
                                    placeholder={'Address | Street names | Landmarks ... etc'}
                                    className={styles.desc}
                                    value={FormDescribeLocation}
                                    ref={locDescriptionRef}
                                    disabled={FormCheckLocation ? true : false}
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
                                    onChange={() => { dispatcher(swearCheck()) }}
                                />
                                <Text className={styles.checkText}>I hereby agree that this complaint is legitimate and is a confidential issue that needs to be addressed immediately.</Text>
                            </Col>
                            <Col span={24}>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23 }}>
                                    <Checkbox checked={FormSwearCheck}
                                        className={styles.checkbox}
                                        onChange={() => { dispatcher(swearCheck()) }}
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