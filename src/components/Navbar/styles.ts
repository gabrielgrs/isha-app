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
  padding: 8px;
  width: 100%;

  ${({ theme }) => theme.breakPoints.mobile} {
    position: fixed;
    bottom: 0;
    left: 0;
    flex-direction: row;
    height: max-content;
    padding: 8px 10%;
    border-top: solid 2px ${({ theme }) => theme.colors.silver};
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ theme }) => theme.breakPoints.mobile} {
    flex-direction: row;
  }
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

  ${({ theme }) => theme.breakPoints.mobile} {
    &:after {
      bottom: 0;
      left: 0;
      width: 0px;
      height: 4px;
    }

    &:hover {
      background: none;

      &:after {
        height: 4px;
        width: 100%;
      }
    }
  }
`
