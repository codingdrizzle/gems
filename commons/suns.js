import React from 'react'
import Image from 'next/image'
import morning from '../assets/suns/morning.png'
import afternoon from '../assets/suns/afternoon.png'
import evening from '../assets/suns/evening.png'
import styles from  '../styles/Home.module.css'

export const Morning = ({value}) => {
    return (
        <Image src={morning} alt={'Morning Sun'} width={value+15} height={value+2} />
    )
}
export const Afternoon = ({value}) => {
    return (
        <Image src={afternoon} alt={'Afternoon Sun'} width={value} height={value} />
    )
}
export const Evening = ({value}) => {
    return (
        <Image src={evening} alt={'Evening Sun'} width={value} height={value} />
    )
}

// Morning.defaultProps = {
//     30: 50
// }
// Afternoon.defaultProps = {
//     30: 50
// }
// Evening.defaultProps = {
//     30: 50
// }