import { ReactNode } from 'react'

export type Column = {
  children: ReactNode
  size: number

  justifySelf?: 'start' | 'center' | 'end'
  alignSelf?: 'start' | 'center' | 'end'
}
