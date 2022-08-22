// import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Skeleton, Row, Col, Image, Typography, Switch } from 'antd'
import { FaRegUserCircle } from 'react-icons/fa'
import { BsChatText, BsTelephone, BsFillImageFill } from 'react-icons/bs'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import { MdDateRange, MdOutlineLocationOn, MdLocationPin, MdOutlineCategory } from 'react-icons/md'
import styles from '../../../styles/admin-styles/complaints-styles/preview.module.css'
import ComplaintItem from '../../../helpers/complaint-item'

const { Title, Text } = Typography

const Preview = ({ complaint }) => {
  const [data, setData] = useState({})
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    setData({ ...complaint })
    setChecked(complaint.resolved)
  }, [])

  const { category, content, date, descLocation, geoLocation, image, resolved, type, user: complainant } = data;

  const handleChecked = async () => {
    setChecked(prev => !prev)
    await axios.patch(`/api/complaints?id=${data._id}`, { resolved: checked })
  }
  
  console.log('Resolved  ' + resolved)

  console.log('Checked  ' + checked)

  return (
    <Row gutter={[0, 32]}>
      {
        loading ?
          <Col span={24}><Skeleton active /></Col>
          :
          <Col span={24}>
            <Card className={styles.card}>
              <Row gutter={[20, 5]}>
                {/* <AgencyIcon type={category}/> */}
                <Col span={24}><Title level={5}>{category}</Title></Col>
                <Col xs={24} md={12}>
                  <Row gutter={[0, 10]}>
                    <Col span={24}>
                      <ComplaintItem header={'Complaint details'} icon={<BsChatText size={20} color={'#e92424cc'} />}>
                        <Text className={styles.text}><BsChatText size={20} color={'#e92424cc'} /> {content}</Text>
                        <Text className={styles.text}><MdOutlineCategory size={20} color={'#00bc6d'} /> <b>Complaint type </b> [ {type}]</Text>
                        <Text className={styles.text}><MdDateRange size={20} color={'#c2c218'} /> <b>Date: </b> {date}</Text>
                      </ComplaintItem>
                    </Col>
                    <Col span={24}>
                      <ComplaintItem header={'Location details'} icon={<MdOutlineLocationOn size={23} color={'#00bc6d'} />}>
                        <Text className={styles.text} style={{ fontWeight: 600, color: '#00bc6d' }}><MdLocationPin size={20} />Complainant&apos;s description</Text>
                        <ul className={styles.list}><li>{descLocation}</li></ul>
                        <Text className={styles.text} style={{ fontWeight: 600, color: '#00bc6d' }}><MdOutlineLocationOn size={20} />Generated location (complainant&apos;s device GPS)</Text>
                        <ul className={styles.list}>
                          <li><b>City: </b>{geoLocation.city}</li>
                          <li><b>Locality/ District: </b>{geoLocation.locality}</li>
                          <li><b>Coordinates (Lat,Long): </b>{geoLocation.latitude + ' , ' + geoLocation.longitude}</li>
                        </ul>
                      </ComplaintItem>
                    </Col>
                    <Col span={24}>
                      <ComplaintItem header={'Complainant'} icon={<FaRegUserCircle size={20} color={'#c2c218'} />}>
                        <Text className={styles.text}><FaRegUserCircle size={20} color={'#00bc6d'} /> {complainant.firstname + ' ' + complainant.lastname}</Text>
                        <Text className={styles.text}><BsTelephone size={20} color={'#e92424cc'} /> {'0' + complainant.contact}</Text>
                      </ComplaintItem>
                    </Col>
                    <Col span={24}>
                      <Text>Resolved state </Text>
                      <Switch checked={checked} onClick={handleChecked} />
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} md={12}>
                  <ComplaintItem header={'Image content'} icon={<BsFillImageFill size={20} color={'#ff0a53'}/>}>
                    <Image
                      width={200}
                      alt={'Complaint image'}
                      src={image}
                      placeholder={
                        <Image
                          alt={'Complaint image'}
                          preview={false}
                          src={image}
                          width={'100%'}
                          height={'auto'}
                        />
                      }
                    />
                  </ComplaintItem>
                </Col>
              </Row>
            </Card>
          </Col>
      }
    </Row>
  )
}


export default Preview