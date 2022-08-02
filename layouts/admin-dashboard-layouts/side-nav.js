import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Typography } from 'antd'
import Logo from '../../commons/logo'
import styles from '../../styles/admin-styles/layout-styles/side-nav.module.css'
import { BsFillGridFill, BsBarChartLineFill } from 'react-icons/bs'
import { FaBell, FaPodcast } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'

const { Text } = Typography
const router = Router

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
                        <li className={styles.navItem} onClick={() => router.push('/admin')}>
                            <BsFillGridFill size={25} className={styles.navIcon} />
                            <Text className={styles.text}>Dashboard</Text>
                        </li>
                        <li className={styles.navItem} onClick={() => router.push('/admin/complaints')}>
                            <FaBell size={25} className={styles.navIcon} />
                            <Text className={styles.text}>Complaints</Text>
                        </li>
                        <li className={styles.navItem} onClick={() => router.push('/admin/statistics')}>
                            <BsBarChartLineFill size={25} className={styles.navIcon} />
                            <Text className={styles.text}>Statistics</Text>
                        </li>
                        <li className={styles.navItem} onClick={() => router.push('/admin/broadcast')}>
                            <FaPodcast size={25} className={styles.navIcon} />
                            <Text className={styles.text}>Broadcast</Text>
                        </li>
                        <li className={styles.navItem} onClick={() => router.push('/admin/settings')}>
                            <IoSettings size={25} className={styles.navIcon} />
                            <Text className={styles.text}>Settings</Text>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottomNavParent}>
                <div className={styles.bottomNav}>
                    <Link href={'/admin/'}><BsFillGridFill size={25} className={styles.navIcon} /></Link>
                    <Link href={'/admin/complaints'}><FaBell size={25} className={styles.navIcon} /></Link>
                    <Link href={'/admin/statistics'}><BsBarChartLineFill size={25} className={styles.navIcon} /></Link>
                    <Link href={'/admin/broadcast'}><FaPodcast size={25} className={styles.navIcon} /></Link>
                    <Link href={'/admin/settings'}><IoSettings size={25} className={styles.navIcon} /></Link>
                </div>
            </div>
        </>
    )
}

export default Navigation