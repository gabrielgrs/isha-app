import { ReactNode, useEffect, useRef } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
  isOpen: boolean
  onClose?: () => void
}

function Modal({ children, isOpen, onClose }: Props) {
  const ref = useRef<any>(null)

  useEffect(() => {
    const onClickOutside = (event: any) =>
      !ref.current?.contains(event.target) && onClose?.()

    window.addEventListener('mousedown', onClickOutside)
    return () => window.removeEventListener('mousedown', onClickOutside)
  }, [onClose, ref])

  useEffect(() => {
    const onPressEscape = (event: any) => event.code === 'Escape' && onClose?.()

    window.addEventListener('keydown', onPressEscape)
    return () => window.removeEventListener('keydown', onPressEscape)
  })

  if (!isOpen) return null

  return (
    <S.Overlay>
      <S.Container ref={ref}>{children}</S.Container>
    </S.Overlay>
  )
}

export default Modal
