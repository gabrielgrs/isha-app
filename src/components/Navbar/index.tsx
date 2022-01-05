import { useRouter } from 'next/router'
import * as S from './styles'

function Navbar() {
  const { push } = useRouter()

  const onLogout = () => alert('logout')

  return (
    <S.Container>
      <S.Section>
        <S.NavItem onClick={() => push('/')}>Home</S.NavItem>
        <S.NavItem onClick={() => push('/agenda')}>Agenda</S.NavItem>
      </S.Section>
      <S.Section>
        <S.NavItem onClick={() => push('/perfil')}>Perfil</S.NavItem>
        <S.NavItem onClick={() => onLogout()}>Sair</S.NavItem>
      </S.Section>
    </S.Container>
  )
}

export default Navbar
