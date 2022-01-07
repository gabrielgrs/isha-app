import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  width: auto;
  border-radius: 0 24px 0 24px;
  border: solid 4px ${({ theme }) => theme.colors.primary};
`

export const Image = styled.img`
  height: 100px;
  width: auto;
  border-radius: 0 24px 0 24px;
`
