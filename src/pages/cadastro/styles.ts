import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;

  ${({ theme }) => theme.breakPoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export const Banner = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakPoints.mobile} {
    display: none;
  }
`

export const Content = styled.div`
  display: grid;
  align-items: center;
  height: 100vh;
`

export const Main = styled.main`
  padding: 0 10%;
  width: 100%;
  max-width: 768px;
  justify-self: center;
`

const _ = () => null
export default _
