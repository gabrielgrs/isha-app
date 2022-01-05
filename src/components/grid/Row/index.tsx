import * as S from './styles'
import * as T from './types'

function Row({ children, ...rest }: T.Row) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>
}

export default Row
