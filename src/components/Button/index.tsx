import type * as T from './types'
import * as S from './styles'

function Button({ children, ...rest }: T.Props) {
  return <S.Button {...rest}>{children}</S.Button>
}

export default Button
