import { InputHTMLAttributes } from 'react'

export type Props = {
  selected: Date
  onChange: (date: Date) => void
} & InputHTMLAttributes<HTMLInputElement>
