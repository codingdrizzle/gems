import React from 'react'
import {Flag} from '../../commons/flag'
import Logo from '../../commons/logo'
import Button from '../button'
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
                    <Logo value={50} />
                    {/* <h1 className={styles.logoTextNav}>GEMS</h1> */}
                </div>
            </div>
            <div className={styles.btnContainerNav}>
                <Button urlProp={'/login'} innerText={'LOGIN'} btnProps={styles.btnNav} btnColor={colors.loginBtnNav}/>
                <Button urlProp={'/register'} innerText={'REGISTER'} btnProps={styles.btnNav} btnColor={colors.signUpBtnNav} />
            </div>
        </>

    )
}

export default Navbar