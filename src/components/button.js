import React from 'react'
import { Button as Btn} from 'antd'
import styles from './button.module.css'
import { useRouter } from 'next/router'

const Button = ({ btnColor, btnProps, urlProp, innerText }) => {
  const router = useRouter()
  return (
    <a href={urlProp}>
      <Btn className={[styles.button, btnColor, btnProps]}>
        {innerText}
      </Btn>
    </a>
  )
}

export default Button