import Navbar from '../Navbar'
import * as S from './styles'

function Layout({ children, title, description }) {
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
