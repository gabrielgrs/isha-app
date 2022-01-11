import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
}

function AppWrapper({ children }: Props) {
  const isAuthenticated = true

  return <S.Layout isAuthenticated={isAuthenticated}>{children}</S.Layout>
}

export default AppWrapper
