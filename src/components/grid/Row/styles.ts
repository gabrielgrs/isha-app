import styled from 'styled-components'

import * as T from './types'

export const Wrapper = styled.div<T.Row>`
  display: grid;
  column-gap: 20px;
  row-gap: ${({ rowGap = '32px' }) => rowGap};
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: ${({ marginBottom }) => marginBottom};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-items: ${({ alignItems }) => alignItems};
`
