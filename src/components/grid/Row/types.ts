import { ReactNode } from 'react'

export type Row = {
  children: ReactNode
  id?: string
  marginBottom?: string | number
  justifyItems?: 'start' | 'center' | 'end'
  alignItems?: 'start' | 'center' | 'end'
  rowGap?: string
}
