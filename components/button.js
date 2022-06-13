import React from 'react'
import { Button } from 'antd'
import styles from './button.module.css'

export const LoginBtn = ({btnColor, btnProps}) => {
  return (
    <Button className={[styles.button, btnColor, btnProps]}>LOGIN</Button>
  )
}
export const SignUpBtn = ({ btnColor, btnProps}) => {
  return (
    <Button className={[styles.button, btnColor, btnProps]}>SIGN UP</Button>
  ) 
}

LoginBtn.defaultProps = {
  btnProps: ''
}
SignUpBtn.defaultProps = {
  btnProps: ''
}

