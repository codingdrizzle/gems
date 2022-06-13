import Image from 'next/image'
import React from 'react'
import police from '../assets/partners/police-service.png'
import fire from '../assets/partners/fire-service.png'
import ambulance from '../assets/partners/ambulance-service.png'
import nadmo from '../assets/partners/nadmo-service.png'


export const Police = ({value}) => {
    return(
        <Image src={police} alt={'Police Partner'} width={value} height={value}/>
    )
}

export const Fire = ({value}) => {
    return(
        <Image src={fire} alt={'Fire Partner'} width={value} height={value}/>
    )
}

export const Abumlance = ({value}) => {
    return(
        <Image src={ambulance} alt={'Abumlance Partner'} width={value} height={value}/>
    )
}

export const Nadmo = ({value}) => {
    return(
        <Image src={nadmo} alt={'Nadmo Partner'} width={value} height={value}/>
    )
}

