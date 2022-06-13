import React from 'react'
import Logo from './logo'
import styles from '../styles/preloader.module.css'

const Preloader = () => {
  return (
  <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
    <div className={styles.ring}>
    </div>
    <span className={styles.logoWrapper}>
      <Logo value={100}/>
    </span>
  </div>
  );
}

export default Preloader