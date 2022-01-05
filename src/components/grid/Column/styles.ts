import styled from 'styled-components'

import * as T from './types'

export const Wrapper = styled.div<T.Column>`
  grid-column: span ${({ size }) => size};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};

  @media screen and (max-width: 992px) {
    grid-column: span 12;
  }
`
