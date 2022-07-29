import React, { useState } from 'react'
import Link from 'next/link'
import { Typography } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { BsFillGridFill, BsCheckCircleFill, BsBarChartLineFill, BsFillChatDotsFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
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
        <>
            <div className={styles.sideNavParent}>
                <div className={styles.sideNav} onMouseOver={handleHover}>
                    <div span={24} className={styles.logo}><Logo value={50} /></div>
                    <ul className={styles.navItems}>
                        <li className={styles.navItem} onClick={handleClick}>
                            <BsFillGridFill size={25} className={styles.navIcon} />
                            <Link href={'/admin/'} className={styles.link}>Dashboard</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <FaBell size={25} className={styles.navIcon} />
                            <Link href={'/admin/notification'} className={styles.link}>Notifications</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <BsCheckCircleFill size={25} className={styles.navIcon} />
                            <Link href={'/admin/'} className={styles.link}>Resolved</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <BsBarChartLineFill size={25} className={styles.navIcon} />
                            <Link href={'/admin/'} className={styles.link}>Statistics</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <BsFillChatDotsFill size={25} className={styles.navIcon} />
                            <Link href={'/admin/'} className={styles.link}>Messages</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <IoSettings size={25} className={styles.navIcon} />
                            <Link href={'/admin/'} className={styles.link}>Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomNavParent}>
                <div className={styles.bottomNav}>
                        <Link href={'/admin/'}><BsFillGridFill size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/notification'}><FaBell size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/'}><BsCheckCircleFill size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/'}><BsBarChartLineFill size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/'}><IoSettings size={25} className={styles.navIcon} /></Link>
                </div>
            </div>
        </>
    )
}

export default Navigation