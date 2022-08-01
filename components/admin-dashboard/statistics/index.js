import React, { useState } from 'react'
import { Row, Col, Input, Button, Typography } from 'antd'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineFileSearch } from 'react-icons/ai'
import styles from '../../../styles/admin-styles/statistics-styles/statistics.module.css'
import Layout from '../../../layouts/admin-dashboard-layouts/index'
import { ChartBar, ChartLine, ChartPie } from '../../../helpers/charts'

const { Title, Text } = Typography

const Statistics = () => {
    const [ searchResult, setSearchResult] = useState('')

    const handleChange = (e) => {
        setSearchResult(e.target.value)
    }   
    return (
        <Layout title={'Statistics'} >
            <Row gutter={[20, 52]} align={'middle'} justify={'center'} style={{ marginBottom: 30 }}>
                <Col span={24} className={styles.searchBar}>
                    <Input placeholder='Search for a record...' prefix={<FaSearch color='#888' size={18} />} className={styles.searchInput} onChange={handleChange}/>
                    <Button className={styles.searchBtn}>Search</Button>
                </Col>
            </Row>
            <Row gutter={[20, 52]} align={'middle'} justify={'center'} style={{ marginBottom: 30 }}>
                { searchResult !== ''?
                    <Col span={24} className={styles.searchResult}>
                        <Title className={styles.searchResultTitle}><AiOutlineFileSearch color='#888' size={25} /> Results</Title>
                        <Text className={styles.searchResultText}>{searchResult}</Text>
                    </Col> : null
                }
            </Row>
            <Row gutter={[20, 52]} align={'middle'} justify={'center'} style={{ marginBottom: 30 }}>
                <Col xs={24} md={18}>
                    <ChartLine />
                </Col>
                <Col xs={24} md={12}>
                    <ChartPie />
                </Col>
                <Col xs={24} md={12}>
                    <ChartBar />
                </Col>
            </Row>
        </Layout>
    )
}

export default Statistics