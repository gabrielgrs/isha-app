import styled from 'styled-components'

export const Layout = styled.div<{ isAuthenticated: boolean }>`
  display: grid;
  grid-template-columns: ${({ isAuthenticated }) =>
    isAuthenticated ? '240px auto' : '1fr'};
`
