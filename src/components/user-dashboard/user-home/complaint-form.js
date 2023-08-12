import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {GrFormClose} from 'react-icons/gr'
import {IoIosAttach} from 'react-icons/io'
import {IoCloseCircle} from 'react-icons/io5'
import {BsCheckCircleFill} from 'react-icons/bs'
import {Col, Row, Card, Input, Typography, Modal, Select, Button, message, Divider, Checkbox, Spin, Alert} from 'antd'
import {
    formCategory,
    formDescription,
    formAttach,
    locationCheck,
    locationDescription,
    swearCheck
} from '../../../states/actions'
import styles from '../../../styles/user-styles/user-home-styles/content.module.css'
import {police, ecg, fire, local, amb} from './data'
import {useAtomValue} from "jotai";
import {tokenData} from "../../../store";
import {API_AUTH} from "../../../api/axios-client";

const {Text} = Typography
const {TextArea} = Input

const ModalForm = ({visible, onClose}) => {
    // Invoke dispacher
    const dispatcher = useDispatch()
    const {_id} = useAtomValue(tokenData);

    // Get sessions
    const {
        FormCategory,
        FormDescription,
        FormAttachFile,
        FormCheckLocation,
        FormDescribeLocation,
        FormSwearCheck
    } = useSelector(state => state)
    const [imageName, setImageName] = useState('')
    const [isDone, setIsDone] = useState(false)
    const [statusIcon, setStatusIcon] = useState()
    const [file, setFile] = useState(null)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [types, setTypes] = useState('')
    const [formCat, setFormCat] = useState('')
    const [loading, setLoading] = useState(false)
    const [btnDisable, setBtnDisable] = useState(false)
    // const [checker, setChecker] = useState(false)


    // Refs
    const descriptionRef = useRef(null)
    const locDescriptionRef = useRef(null)

    const handleFileSelect = () => {
        setIsDone(!isDone)
        setFile(document.getElementById('file').files[0])
        setStatusIcon('')
        setImageName(document.getElementById('file').files[0].name)
        setBtnDisabled(false)
        setLoading(false)
    };

    const upLoadImage = () => {
        setStatusIcon('')
        if (!file) {
            return message.warning('Please attach an image file.')
        } else {
            setLoading(true)
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
                    setLoading(false)
                    setBtnDisabled(true)
                    dispatcher(formAttach(data.secure_url))
                    setIsDone(true)
                    setStatusIcon(<span style={{display: 'flex', alignItems: 'center', gap: 5}}>: <b>Uploaded successfully.</b><BsCheckCircleFill
                        size={20} color={'rgba(0, 200, 81, 1)'}/></span>)
                })
                .catch(() => {
                    setIsDone(false)
                    setLoading(false)
                    setStatusIcon(<span style={{display: 'flex', alignItems: 'center', gap: 5}}>: <b>Error uploading, try checking your internet try again.</b><IoCloseCircle
                        size={20} color={'#E92424'}/></span>)
                })
        }
    }

    function getLocation() {
        const success = (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

            axios.get(url)
                .then(res => {
                    const {city, locality, latitude, longitude} = res.data
                    dispatcher(locationCheck({city, locality, latitude, longitude}))
                })
                .catch(err => {
                    if (err) message.warning('Could not retrieve location.')
                })
        }

        const error = () => {
            message.warning('Could not retrieve location.')
        }
        navigator.geolocation.getCurrentPosition(success, error);
    }

    const handleCheck = (e) => {
        if (e.target.checked) {
            setTypes(e.target.placeholder)
        } else {
            setTypes('')
        }
    }

    const resetForm = () => {
        dispatcher(formCategory(''))
        setTypes(false)
        setFormCat('')
        dispatcher(formDescription(''))
        setIsDone(false)
        setImageName('')
        setFile('')
        dispatcher(formAttach(''))
        setStatusIcon(null)
        document.getElementById('typeCheck').checked = false
        dispatcher(locationCheck({}))
        dispatcher(locationDescription(''))
        dispatcher(swearCheck())
        setBtnDisable(false)
    }

    const handleFormSubmit = async () => {
        try {

            if (FormCategory === '') {
                message.warning('Please choose a category.')
            } else if (types === '') {
                message.warning('Please choose a type.')
            } else if (FormDescription === '') {
                message.warning('Please describe what happened.')
            } else if (FormAttachFile === '') {
                message.warning('Please upload a file.')
            } else if (FormDescribeLocation === '') {
                message.warning('Please fill the location section.')
            } else if (!FormSwearCheck) {
                message.warning('Please agree to the terms and conditions.')
            } else {
                // setBtnDisable(true)
                const complaintData = {
                    category: FormCategory,
                    type: types,
                    content: FormDescription,
                    imageUrl: FormAttachFile,
                    geoLocation: Object.keys(FormCheckLocation).length != 0 ? FormCheckLocation : {message: 'Could not generate GEO-Loaction details.'},
                    descLocation: FormDescribeLocation === '' ? ' ' : FormDescribeLocation,
                    TnC: FormSwearCheck,
                    resolved: false,
                    complainant: _id
                }

                await API_AUTH.post('/complaint/new', complaintData)
                    .then(response => {
                        if (response) {
                            message.success('Successfully submitted complaint.');
                            resetForm();
                            onClose();
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        if (err) message.error(err.message)
                    })
            }
        } catch (error) {
            if (error.message) message.error(error.message)
            else message.error('Sorry, could not handle process.')
        }
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
            closeIcon={<GrFormClose color={'red'} size={50}/>}
        >
            <Row gutter={[0, 0]} justify={'middle'} align={'center'} style={{}}>
                <Col span={24} xs={24}>
                    <Card className={styles.formCard}>
                        <Row>
                            <Col span={24}><Text className={styles.formHeader}>Lodge a complaint here</Text></Col>
                        </Row>
                        <Row style={{marginTop: 30,}} gutter={[0, 5]}>
                            <Col span={24}><Text className={styles.formLabel}>Select category</Text></Col>
                            <Col span={24}>
                                <select
                                    id='select'
                                    required
                                    //fieldNames={{ label: 'Select', value: 'value' }}
                                    placeholder='Select'
                                    className={styles.selectOption}
                                    value={FormCategory}
                                    onChange={(e) => {
                                        dispatcher(formCategory(e.target.value))
                                        setFormCat(e.target.value)
                                    }}
                                >
                                    <option value="" hidden>Select something</option>
                                    <option value="Ghana Police Service">Ghana Police Service</option>
                                    <option value="Ghana Fire Service">Ghana Fire Service</option>
                                    <option value="Ghana Ambulance Service">Ghana Ambulance Service</option>
                                    <option value="Electricity Company of Ghana">Electricity Company of Ghana (ECG)
                                    </option>
                                    <option value="Local Assembly">Local Assembly</option>
                                </select>
                            </Col>
                        </Row>
                        {
                            formCat ?
                                <Row style={{marginTop: 30,}} gutter={[0, 5]}>
                                    <Col span={24}>
                                        <Text className={styles.formLabel}>Type (Choose only one)</Text>
                                    </Col>

                                    <Row align='middle' justify='start' gutter={[20, 5]}>
                                        {

                                            formCat === "Ghana Police Service" ?
                                                police.map((item, _) => {
                                                    return (
                                                        <Col span={24} key={_} style={{
                                                            display: 'flex',
                                                            gap: 3,
                                                            justifyContent: 'flex-start',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Input id='typeCheck' type={'checkbox'} required
                                                                   placeholder={item} style={{width: 'auto'}}
                                                                   onChange={handleCheck}/>
                                                            <p style={{margin: 0, fontSize: 16}}>{item}</p>
                                                        </Col>
                                                    )
                                                }) :
                                                formCat === "Ghana Fire Service" ?
                                                    fire.map((item, _) => {
                                                        return (
                                                            <Col span={24} key={_} style={{
                                                                display: 'flex',
                                                                gap: 3,
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'center'
                                                            }}>
                                                                <Input id='typeCheck' type={'checkbox'} required
                                                                       placeholder={item} style={{width: 'auto'}}
                                                                       onChange={handleCheck}/>
                                                                <p style={{margin: 0, fontSize: 16}}>{item}</p>
                                                            </Col>
                                                        )
                                                    }) :
                                                    formCat === "Ghana Ambulance Service" ?
                                                        amb.map((item, _) => {
                                                            return (
                                                                <Col span={24} key={_} style={{
                                                                    display: 'flex',
                                                                    gap: 3,
                                                                    justifyContent: 'flex-start',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Input id='typeCheck' type={'checkbox'} required
                                                                           placeholder={item} style={{width: 'auto'}}
                                                                           onChange={handleCheck}/>
                                                                    <p style={{margin: 0, fontSize: 16}}>{item}</p>
                                                                </Col>
                                                            )
                                                        }) :
                                                        formCat === "Electricity Company of Ghana" ?
                                                            ecg.map((item, _) => {
                                                                return (
                                                                    <Col span={24} key={_} style={{
                                                                        display: 'flex',
                                                                        gap: 3,
                                                                        justifyContent: 'flex-start',
                                                                        alignItems: 'center'
                                                                    }}>
                                                                        <Input id='typeCheck' type={'checkbox'} required
                                                                               placeholder={item}
                                                                               style={{width: 'auto'}}
                                                                               onChange={handleCheck}/>
                                                                        <p style={{margin: 0, fontSize: 16}}>{item}</p>
                                                                    </Col>
                                                                )
                                                            }) :
                                                            formCat === "Local Assembly" ?
                                                                local.map((item, _) => {
                                                                    return (
                                                                        <Col span={24} key={_} style={{
                                                                            display: 'flex',
                                                                            gap: 3,
                                                                            justifyContent: 'flex-start',
                                                                            alignItems: 'center'
                                                                        }}>
                                                                            <Input id='typeCheck' type={'checkbox'}
                                                                                   required placeholder={item}
                                                                                   style={{width: 'auto'}}
                                                                                   onChange={handleCheck}/>
                                                                            <p style={{
                                                                                margin: 0,
                                                                                fontSize: 16
                                                                            }}>{item}</p>
                                                                        </Col>
                                                                    )
                                                                }) : null
                                        }
                                    </Row>
                                </Row> : null}
                        <Row style={{marginTop: 30,}} gutter={[0, 5]}>
                            <Col span={24}><Text className={styles.formLabel}>What happened?</Text></Col>
                            <Col span={24}>
                                <TextArea
                                    placeholder={'Describe your complaint in this section.'}
                                    className={styles.formInput}
                                    value={FormDescription}
                                    ref={descriptionRef}
                                    required
                                    onChange={() => dispatcher(formDescription(descriptionRef.current.resizableTextArea.textArea.value))}
                                />
                            </Col>
                        </Row>
                        <Row style={{marginTop: 30,}} gutter={[0, 17]}>
                            <Col span={24}
                                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15}}>
                                <Input id='file' type='file' name='file' accept='image/*' required hidden={true}
                                       onChange={handleFileSelect}></Input>
                                <Button className={styles.attachBtn} onClick={() => {
                                    document.getElementById('file').click()
                                }}>
                                    <Text className={styles.attachBtnText}> Attach a file. <span
                                        className={styles.vanish}>[ Image ]</span></Text>

                                    <span
                                        style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                        <Divider
                                            plain={false} type='vertical'
                                            style={{
                                                borderWidth: 2,
                                                borderColor: '#91A2B8',
                                                height: 43,
                                                padding: 0,
                                                marginTop: 2
                                            }}/>
                                        <IoIosAttach style={{
                                            transform: 'rotate(90deg)',
                                            fontSize: 30,
                                            color: 'rgba(0,0,0,0.5)'
                                        }}/>
                                    </span>
                                </Button>
                                <Button onClick={upLoadImage} disabled={btnDisabled}
                                        className={styles.uploadBtn}>Upload</Button>
                            </Col>
                            <Col span={24}
                                 style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 5}}>
                                <Text style={{fontSize: 15}}>{imageName}</Text>{loading ? (
                                <i>&nbsp;<Spin spinning/></i>) : ''}{isDone ? statusIcon : statusIcon}
                            </Col>
                        </Row>
                        <Row style={{marginTop: 30,}} gutter={[0, 17]}>
                            {/* <Col span={24} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 23 }}>
                                <Checkbox required checked={checker} onChange={handleLocChecker} className={styles.checkbox} disabled={FormDescribeLocation === '' ? false : true} />
                                <Text className={styles.checkText}>Allow place of urgency to be tracked automatically based on your current location.</Text>
                            </Col> */}
                            <Col span={24}>
                                <Text className={styles.formLabel}>Describe location of the incident.</Text>
                                <Input
                                    placeholder={'Address | Street names | Landmarks ... etc'}
                                    className={styles.desc}
                                    value={FormDescribeLocation}
                                    ref={locDescriptionRef}
                                    required
                                    onChange={() => dispatcher(locationDescription(locDescriptionRef.current.input.value))}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Divider type='horizontal'
                                         style={{marginTop: 30, border: '1px solid rgba(0,0,0,0.1)'}}
                                />
                            </Col>
                        </Row>
                        <Row style={{marginTop: 10}} gutter={[0, 17]}>
                            <Col span={24} style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: 23
                            }}>
                                <Checkbox checked={FormSwearCheck}
                                          className={styles.checkbox}
                                          required
                                          onChange={async () => {
                                              await getLocation()
                                              dispatcher(swearCheck())
                                          }}
                                />
                                <Text className={styles.checkText}>I hereby agree that this complaint is legitimate and
                                    is a confidential issue that needs to be addressed immediately.</Text>
                            </Col>
                            <Col span={24}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 23
                                }}>
                                    <Checkbox checked={FormSwearCheck}
                                              className={styles.checkbox}
                                              required
                                              onChange={async () => {
                                                  await getLocation()
                                                  dispatcher(swearCheck())
                                              }}
                                    />
                                    <Text className={styles.checkText}>I agree to face the penalty or pay a fine if this
                                        complaint is fake.</Text>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 40,}} gutter={[0, 17]}>
                            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                                <Button className={styles.submitBtn} disabled={btnDisable}
                                        onClick={handleFormSubmit}>Submit</Button>
                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>

        </Modal>
    )
}

export default ModalForm