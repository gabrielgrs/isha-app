import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Column, Row, Label, Textfield, Button } from '../../components'
import * as S from './styles'

const Register: NextPage = () => {
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
              <h1>Cadastro</h1>
            </Column>
            <Column size={12}>
              <Label>Nome Completo</Label>
              <Textfield />
            </Column>
            <Column size={12}>
              <Label>E-mail</Label>
              <Textfield />
            </Column>
            <Column size={6}>
              <Label>Senha</Label>
              <Textfield type="password" />
            </Column>
            <Column size={6}>
              <Label>Confirmação de senha</Label>
              <Textfield type="password" />
            </Column>

            <Column size={12} justifySelf="end">
              <Button onClick={() => push('/')}>Cadastrar</Button>
            </Column>
            <Column size={12} justifySelf="end">
              <span onClick={() => push('/login')}>Já possui conta?</span>
            </Column>
          </Row>
        </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Register
