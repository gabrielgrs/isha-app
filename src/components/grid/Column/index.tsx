import * as S from './styles'
import * as T from './types'

function Column({ children, size, justifySelf, alignSelf }: T.Column) {
  return (
    <S.Wrapper size={size} justifySelf={justifySelf} alignSelf={alignSelf}>
      {children}
    </S.Wrapper>
  )
}

export default Column
