import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;

  ${({ theme }) => theme.breakPoints.mobile} {
    grid-template-columns: 1fr;
    padding-bottom: 100px;
  }
`

export const Header = styled.div`
  background: radial-gradient(
    circle,
    rgba(75, 135, 244, 1) 0%,
    rgba(75, 155, 244, 1) 48%,
    rgba(75, 135, 244, 1) 100%
  );

  padding: 40px 50px 100px;
  border-radius: 0 0 100px 0;

  ${({ theme }) => theme.breakPoints.mobile} {
    padding: 20px 50px 50px;
  }
`

export const Main = styled.main`
  padding: 40px 10%;
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
