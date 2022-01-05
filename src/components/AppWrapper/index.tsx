import * as S from './styles'

function AppWrapper({ children }) {
  const isAuthenticated = true

  return <S.Layout isAuthenticated={isAuthenticated}>{children}</S.Layout>
}

export default AppWrapper
