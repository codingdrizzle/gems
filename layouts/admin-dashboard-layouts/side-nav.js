import React, { useState } from 'react'
import Link from 'next/link'
import { Typography } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { BsFillGridFill, BsBarChartLineFill } from 'react-icons/bs'
import { FaBell, FaPodcast } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'

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
                            <Link href={'/admin/complaints'} className={styles.link}>Complaints</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <BsBarChartLineFill size={25} className={styles.navIcon} />
                            <Link href={'/admin/statistics'} className={styles.link}>Statistics</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <FaPodcast size={25} className={styles.navIcon} />
                            <Link href={'/admin/broadcast'} className={styles.link}>Broadcast</Link>
                        </li>
                        <li className={styles.navItem} onClick={handleClick}>
                            <IoSettings size={25} className={styles.navIcon} />
                            <Link href={'/admin/settings'} className={styles.link}>Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomNavParent}>
                <div className={styles.bottomNav}>
                        <Link href={'/admin/'}><BsFillGridFill size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/notification'}><FaBell size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/'}><BsBarChartLineFill size={25} className={styles.navIcon} /></Link>
                    <Link href={'/admin/'}><FaPodcast size={25} className={styles.navIcon} /></Link>
                        <Link href={'/admin/'}><IoSettings size={25} className={styles.navIcon} /></Link>
                </div>
            </div>
        </>
    )
}

export default Navigation