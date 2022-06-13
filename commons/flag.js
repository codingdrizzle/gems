import React from 'react'
import Image from 'next/image'
import flag from '../assets/gifs/flag.gif'

export const Flag = () => {
    return (
        <Image src={flag} alt={'Country Flag'} width={40} height={30}/>
    )
}
export const FormFlag = () => {
    return (
        <div style={{ display: 'inline-block', padding: '0 8px 0 10px'}}>
            <Image src={flag} alt={'Country Flag'} width={20} height={15}/>
        </div>
    )
}
