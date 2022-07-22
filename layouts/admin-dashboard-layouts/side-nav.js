import React, {useState} from 'react'
import { Typography } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { BsFillGridFill, BsCheckCircleFill, BsBarChartLineFill, BsFillChatDotsFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { BiLogOut } from 'react-icons/bi'

const { Text } = Typography

const handleNav = (e) => {
    console.log()
}

const handleHover = (e) => {
    console.log()
}

const Navigation = () => {
    const [focused, setFocused ] = useState(false)
    const [toggle, setToggle ] = useState(false)
    return (
        <div className={styles.sideNav} onMouseOver={handleHover}>
            <div span={24} style={{ margin: '50px 0' }} className={styles.navItem}><Logo value={50}/></div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <BsFillGridFill size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Dashboard</Text>
            </div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <FaBell size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Notification</Text>
            </div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <BsCheckCircleFill size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Resolved</Text>
            </div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <BsBarChartLineFill size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Statistics</Text>
            </div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <BsFillChatDotsFill size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Messages</Text>
            </div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <IoSettings size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Settings</Text>
            </div>
            <div span={24} className={styles.navItem} onClick={handleNav}>
                <BiLogOut size={25} className={styles.navIcon}/>
                <Text style={{display: toggle ? 'inline-block' : 'none'}}>Logout</Text>
            </div>
        </div>
    )
}

export default Navigation