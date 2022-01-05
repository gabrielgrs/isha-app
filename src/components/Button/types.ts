import { ButtonHTMLAttributes, ReactNode } from 'react'

export type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
