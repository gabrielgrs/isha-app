import { ButtonHTMLAttributes, ReactNode } from 'react'

export type Props = {
  children: ReactNode
  variant?: any
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
