import Link from 'next/link'
import React from 'react'
import {Flag} from '../../commons/flag'
import Logo from '../../commons/logo'
import { LoginBtn, SignUpBtn } from '../button'
import styles from '../../styles/home-styles/navbar.module.css'
import colors from '../../styles/colors.module.css'

const Navbar = () => {
    return (
        <>
            <div>
                <div className={styles.flagNav} >
                    <Flag />
                </div>
                <div className={styles.logoNav} >
                    <Logo value={100} />
                    {/* <h1 className={styles.logoTextNav}>GEMS</h1> */}
                </div>
            </div>
            <div className={styles.btnContainerNav}>
                <Link href={'/login'}>
                    <a>
                        <LoginBtn btnColor={colors.loginBtnNav} className={styles.btnNav} />
                    </a>
                </Link>
                <Link href={'/register'}>
                    <a>
                        <SignUpBtn btnColor={colors.signUpBtnNav} className={styles.btnNav} />
                    </a>
                </Link>
            </div>
        </>

    )
}

export default Navbar