import React from 'react'
import { Row, Col, Typography, List, Input, Button } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/footer-styles/footer.module.css'

const { Title, Text } = Typography
const { Item } = List

const featuresList = ['Security', 'Emergency', 'Help']
const contactsList = ['Police - 191', 'Fire - 192', 'Ambulance - 193']

const PageFooter = ({company}) => {
    return (
        <Row gutter={[10, 32]} className={styles.footerInner}>
            <Col xs={24} md={8} lg={5} className={styles.footerContent}>
                <Logo value={100} />
                <Text className={styles.footerBrandText}>Where you can lodge all your complaints without revealing your identity</Text>
            </Col>
            <Col xs={24} md={8} lg={5} className={styles.footerContent}>
                <Title className={styles.footerCaption}>{company.title}</Title>
                <List
                    bordered={false}
                    dataSource={company.list} 
                    renderItem={item => (
                        <Item className={styles.listItem}>
                            <Text className={styles.listItemText}>{item}</Text> 
                        </Item>
                    )}
                />
            </Col>
            <Col xs={24} md={8} lg={5} className={styles.footerContent}>
                <Title className={styles.footerCaption}>Features</Title>
                <List
                    bordered={false}
                    dataSource={featuresList} 
                    renderItem={item => (
                        <Item className={styles.listItem}>
                            <Text className={styles.listItemText}>{item}</Text> 
                        </Item>
                    )}
                />
            </Col>
            <Col xs={24} md={8} lg={5} className={styles.footerContent}>
                <Title className={styles.footerCaption}>Contact</Title>
                <List
                    bordered={false}
                    dataSource={contactsList} 
                    renderItem={item => (
                        <Item className={styles.listItem}>
                            <Text className={styles.listItemText}>{item}</Text> 
                        </Item>
                    )}
                />
            </Col>
            <Col xs={24} md={8} lg={4} className={styles.footerContent}>
                <Title className={styles.footerCaption}>Subscribe</Title>
                <div className={styles.footerForm}>
                    <Input placeholder='Email' className={styles.subscribeInput}/>
                    <Button className={styles.footerFormSubmit}>Submit</Button>
                </div>
            </Col>
        </Row>
    )
}

export default PageFooter