import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: 100vh;
  padding-right: 8px;
  border-right: solid 1px ${({ theme }) => rgba(theme.colors.silver, 0.7)};
  /* margin-right: 8px; */
  padding: 8px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const NavItem = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 16px 0;
  transition: 0.4s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    transition: 0.4s;
    content: '';
    position: absolute;
    width: 4px;
    height: 0;
    background: ${({ theme }) => theme.colors.primary};
    right: 0;
  }

  &:hover {
    background: ${({ theme }) => rgba(theme.colors.silver, 0.4)};

    &:after {
      height: 100%;
    }
  }
`
