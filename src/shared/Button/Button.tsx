import type { ButtonHTMLAttributes, ReactNode } from 'react'
import style from './style.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${style.button} ${className ?? ''}`} {...props}>
      {children}
    </button>
  )
}
