import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`

export const Header = styled.div`
  position: relative;
  background: radial-gradient(
    circle,
    rgba(75, 135, 244, 1) 0%,
    rgba(75, 155, 244, 1) 48%,
    rgba(75, 135, 244, 1) 100%
  );

  padding: 3% 1% 100px;
  border-radius: 0 0 100px 0;
`

export const Main = styled.main`
  padding: 40px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`

export const Description = styled.h2`
  color: ${({ theme }) => theme.colors.silver};
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
`
