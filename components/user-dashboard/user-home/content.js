import React, { useState } from 'react'
import Link from 'next/link'
import { Row, Col, Typography } from 'antd'
import { CgDanger } from 'react-icons/cg'
import { BsCloudCheck, BsLink } from 'react-icons/bs'
import Greetings from './greetings-header'
import Puller from './drawer'
import ModalForm from './complaint-form'
import styles from '../../../styles/user-home-styles/content.module.css'

import Card from './card'

const { Text } = Typography

const Content = () => {
    const [visible, setVisible] = useState(false)

    const [modalVisible, setModalVisibility] = useState(false)
    return (
        <>
            {/* Landing Heading */}
            <Row>
                <Greetings />
            </Row>


            {/* Options Cards */}
            <Row gutter={[52, 32]} justify='center' align='middle' style={{ marginTop: 80 }}>
                <Col xs={24} sm={20} md={20} lg={7}>
                    <Card Icon={<CgDanger />} onClick={() => setModalVisibility(true)} innerText={'Lodge Complaint'} btnText={'here'} cardColor={styles.cardColorDanger} iconColor={styles.iconColorDanger} btnColor={styles.btnColorDanger} />
                </Col>
                <Col xs={24} sm={20} md={10} lg={7}>
                    <Link href={'/user/submissions'}>
                        <a>
                            <Card Icon={<BsCloudCheck />} innerText={'Submissions'} btnText={'check'} cardColor={styles.cardColorSuccess} iconColor={styles.iconColorSuccess} btnColor={styles.btnColorSuccess} />
                        </a>
                    </Link>
                </Col>
                <Col xs={24} sm={20} md={10} lg={7}>
                    <Card Icon={<BsLink />} onClick={() => setVisible(true)} innerText={'Useful Links'} btnText={'click'} cardColor={styles.cardColorWarning} iconColor={styles.iconColorWarning} btnColor={styles.btnColorWarning} />
                </Col>

                <Puller onClose={() => { setVisible(false) }} visible={visible} />

                <ModalForm onClose={() => { setModalVisibility(false) }} visible={modalVisible} />

            </Row>

        </>
    )
}

export default Content