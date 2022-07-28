import React, { useState } from 'react'
import Link from 'next/link'
import { Typography } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { BsFillGridFill, BsCheckCircleFill, BsBarChartLineFill, BsFillChatDotsFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { BiLogOut } from 'react-icons/bi'
import { link } from 'joi'

const { Text } = Typography

const handleClick = (e) => {
    console.log(e.target.classList.add('me'))
}

const handleHover = (e) => {
    console.log()
}

const Navigation = () => {
    const [focused, setFocused] = useState(false)
    const [toggle, setToggle] = useState(false)
    return (
        <div className={styles.sideNavParent}>
            <div className={styles.sideNav} onMouseOver={handleHover}>
                <div span={24} style={{ margin: '50px 0' }}><Logo value={50} /></div>
                <ul className={styles.navItems}>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                        <BsFillGridFill size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Home</Link>
                    </li>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                <FaBell size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Notifications</Link>
                    </li>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                        <BsCheckCircleFill size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Resolved</Link>
                    </li>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                        <BsBarChartLineFill size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Statistics</Link>
                    </li>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                        <BsFillChatDotsFill size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Messages</Link>
                    </li>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                        <IoSettings size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Settings</Link>
                    </li>
                    <li role={link} className={styles.navItem} onClick={handleClick}>
                        <BsFillChatDotsFill size={25} className={styles.navIcon} />
                        <Link href={'/admin/'}>Messages</Link>
                    </li>

                    <BiLogOut size={25} className={styles.navIcon} />
                    <Text style={{ display: toggle ? 'inline-block' : 'none' }}>Logout</Text>
                </ul>

            </div>
        </div>
    )
}

export default Navigation