import React from 'react'
import buttonStyles from "../button/button.module.css"

export const Button = (props) => {
    const {children, onClick} = props
  return (
   <button onClick={onClick} className={buttonStyles.action_btn}>{children}</button>
  )
}
