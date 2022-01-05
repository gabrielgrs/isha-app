import type * as T from './types'
import * as S from './styles'

function Label({ children, ...rest }: T.Props) {
  return <S.Label {...rest}>{children}</S.Label>
}

export default Label
