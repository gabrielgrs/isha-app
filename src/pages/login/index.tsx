import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Column, Row, Label, Textfield, Button } from '../../components'
import * as S from './styles'

const Login: NextPage = () => {
  const { push } = useRouter()

  return (
    <S.Container>
      <S.Banner>
        <div>
          <h1>Isha App</h1>
          <div>O melhor sistema</div>
        </div>
      </S.Banner>
      <S.Content>
        <S.Main>
          <Row>
            <Column size={12}>
              <h1>Acesso</h1>
            </Column>
            <Column size={12}>
              <Label>E-mail</Label>
              <Textfield />
            </Column>
            <Column size={12}>
              <Label>Senha</Label>
              <Textfield type="password" />
            </Column>
            <Column size={12} justifySelf="end">
              <span>Esqueceu a senha?</span>
            </Column>
            <Column size={12} justifySelf="end">
              <Button onClick={() => push('/')}>Acessar</Button>
            </Column>
            <Column size={12} justifySelf="end">
              <span onClick={() => push('/cadastro')}>Criar nova conta</span>
            </Column>
          </Row>
        </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Login
