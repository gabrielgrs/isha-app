import Navbar from '../Navbar'
import * as S from './styles'
import type * as T from './types'

function Layout({ children, title, description }: T.Props) {
  return (
    <S.Container>
      <Navbar />
      <div>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Header>
        <S.Main>{children}</S.Main>
      </div>
    </S.Container>
  )
}

export default Layout
