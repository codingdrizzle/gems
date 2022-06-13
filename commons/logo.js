import React from 'react'
import Image from 'next/image'
import logoIcon from '../assets/logos/logo.png'

const Logo = ({value}) => {
  return (
    <Image src={logoIcon} alt={'Brand Logo'} width={value} height={value}/>
  )
}

export default Logo