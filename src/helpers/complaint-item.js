import React from 'react'
import { Collapse } from 'antd'
import styles from '../styles/admin-styles/complaints-styles/preview.module.css'

const { Panel } = Collapse

const ComplaintItem = (props) => {
    return (
        <Collapse className={styles.collapse} >
            <Panel header={props.header} key={props.index} extra={props.icon}>
                <div className={styles.panelInner} style={{height: props.height}}>
                {props.children}
                </div>
            </Panel>
        </Collapse>
    )
}

export default ComplaintItem