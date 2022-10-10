import React from 'react'
import styles from './marquee.module.css'

const Marquee = () => {
  return (
    <div className={styles.mover}>
        <p className={styles.move}>
              National Emergency - 112 | Ghana Police - Call 191 | Ghana Ambulance - 193 | Ghana Fire - 192 ...
        </p>

    </div>
  )
}

export default Marquee