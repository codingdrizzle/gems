import React, { useState } from 'react'
import { MdMenuOpen, MdAddCircle, MdEdit } from 'react-icons/md'
import { FaUserAlt, FaTrash } from 'react-icons/fa'
import { Typography } from 'antd'
import Layout from '../../../layouts/admin-dashboard-layouts/index'
import RegisterForm from './register-form'
import RenderAgents from './render-agents'
import DeleteForm from './delete'
import UpdateForm from './update-form'
import styles from '../../../styles/admin-styles/settings-styles/settings.module.css'



const { Title } = Typography

const Settings = () => {
    const [all, setAll] = useState(true)
    const [new_, setNew] = useState(false)
    const [edit, setEdit] = useState(false)
    const [remove, setRemove] = useState(false)

    const handleAll = () => {
        setAll(true)
        setNew(false)
        setEdit(false)
        setRemove(false)
    }

    const handleNew = () => {
        setAll(false)
        setNew(true)
        setEdit(false)
        setRemove(false)
    }
    
    const handleEdit = () => {
        setAll(false)
        setNew(false)
        setEdit(true)
        setRemove(false)
    }
    
    const handleRemove = () => {        
        setAll(false)
        setNew(false)
        setEdit(false)
        setRemove(true)
    }
  return (
    <Layout title={'Settings'}>
          <Title level={4} style={{ color: '#00115B', display: 'flex', alignItems: 'center', gap: 5 }}><MdMenuOpen size={30} /> Menu</Title>
          <ul className={styles.menu}>
              <li className={styles.menuItem} onClick={handleAll}>
                  <FaUserAlt className={styles.icon} /> <span className={styles.text}>All Agents</span>
              </li>
              <li className={styles.menuItem} onClick={handleNew}>
                  <MdAddCircle className={styles.icon} /> <span className={styles.text}>New Agent</span>
              </li>
              <li className={styles.menuItem} onClick={handleEdit}>
                  <MdEdit className={styles.icon} /> <span className={styles.text}>Edit Agent</span>
              </li>
              <li className={styles.menuItem} onClick={handleRemove}>
                  <FaTrash className={styles.icon} /> <span className={styles.text}>Remove Agent</span>
              </li>
          </ul>

          {all? <RenderAgents/> : ''}
          {new_? <RegisterForm/> : ''}
          {edit? <UpdateForm/> : ''}
          {remove? <DeleteForm/> : ''}

    </Layout>
  )
}

export default Settings