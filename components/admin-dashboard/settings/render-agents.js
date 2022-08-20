import React, {useState} from 'react'
import { Row, Col, Card, Typography, Skeleton, Input, Button } from 'antd'
import { FaUser } from 'react-icons/fa'
import { FaSearch} from 'react-icons/fa'
import styles from '../../../styles/admin-styles/settings-styles/agents.module.css'

const { Title, Text } = Typography

const RenderAgents = ({agents}) => {
    // States

    const [searchResults, setSearchResults] = useState('')

    return (
        <Row gutter={[20,20]}>
            <Col span={24} className={styles.searchBar}>
                <Input placeholder='Search agent here' prefix={<FaSearch color='#888' size={18} style={{ marginRight: 10 }} />} className={styles.searchInput} onChange={(e) => { setSearchResults(e.target.value) }} />
                <Button className={styles.searchBtn}>Search</Button>
            </Col>
            {
                Object.keys(agents).length === 0 ? 
                    <Col xs={24} lg={12}>
                        <Title level={4} style={{ color: '#ccc' }}>No Agents ... </Title>
                        <Skeleton loading={true} active avatar />
                    </Col> :
                agents.filter(item => {
                    if(searchResults == ''){
                        return item
                    }else if(item.name.toLowerCase().includes(searchResults.toLowerCase())){
                        return item
                    }
                }).map((user, _) => {
                    return(
                        <Col key={_} xs={24} md={12} lg={8}>
                            <Card hoverable className={[styles.userCard,'userCard']}>
                                <div className={styles.icon}><FaUser size={25} color={'#fff'}/></div>
                                <Text className={styles.username}>{user.name}</Text>                                    
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default RenderAgents