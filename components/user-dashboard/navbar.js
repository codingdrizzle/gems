import {useRouter} from 'next/router'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import React, { useState, useEffect } from 'react'
import { Menu, Button, Typography } from 'antd'
import { FaSignOutAlt } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import Logo from '../../commons/logo'
import styles from '../../styles/user-styles/user-home-styles/navbar.module.css'

const { Text } = Typography

const Navbar = ({active}) => {
    const router = useRouter()
    const [key, setKey] = useState('home')
    const [menuToggle, setMenuToggle] = useState(false)

    function getItem(label, key) {
        return {
            label,
            key
        }
    }

    const items = [
        getItem('Home', 'home'),
        getItem('Notifications', 'notifications'),
        getItem('Tips', 'tips'),
        getItem('Settings', 'settings'),
    ]

    const navigate = async (e) => {
        const paths = ['/user/', '/user/notifications', '/user/tips', '/user/settings']
        for (let i = 0; i < items.length; i++) {
            if (items[i].key === e.key)
                router.push(paths[i])
        }
    }

    const { data: session } = useSession()
    const handleSignOut = () => {
        if(session){
            signOut({redirect: false})
            router.push('/login')
        }
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.brandLogo}>
                <Link href={'/user/'}>
                    <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                        <Logo value={60} />
                        <Text className={styles.brandLogoText}>GEMS</Text>
                    </a>
                </Link>
            </div>
            <div className={styles.navbarNav}>
                <Menu items={items} mode={'horizontal'} className={styles.navbarMenu} selectedKeys={active} onClick={navigate} />
                <Button className={styles.logoutBtn} onClick={handleSignOut}>
                    <Text style={{ color: '#fff', fontWeight: 500 }}>Logout</Text>
                    <FaSignOutAlt size={20} />
                </Button>
            </div>
            <Button className={styles.menuIcon} style={{ display: menuToggle ? 'none' : 'flex'}} onClick={() => setMenuToggle(!menuToggle)}>
                <BiMenu size={50}/>
            </Button>
            {
                menuToggle ?
                    (<div className={styles.mobileNavbarNav} style={{display: menuToggle ?  'block': 'none'}}>
                        <Button className={styles.closeIcon} onClick={() => setMenuToggle(!menuToggle)}>
                            <IoClose size={35}/>
                        </Button>
                        <Menu items={items} mode={'vertical'} className={styles.navbarMenu} selectedKeys={active} onClick={navigate} />
                        <Button className={styles.logoutBtn} onClick={handleSignOut}>
                            <Text style={{ color: '#fff', fontWeight: 500 }}>Logout</Text>
                            <FaSignOutAlt size={20} />
                        </Button>
                    </div>) : ''
            }
        </nav>
    )
}

export default Navbar