import { darken, rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  width: 95vw;
  max-width: 1184px;
`

export const Content = styled.div`
  margin-top: 16px;
  display: grid;
  justify-content: center;
`

export const Actions = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const Step = styled.div<{
  active: boolean
  completed: boolean
  isFirst: boolean
  isLast: boolean
}>`
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, completed, active }) => {
    if (active) return darken(0.1, theme.colors.primary)
    if (completed) return theme.colors.secondary
    return theme.colors.silver
  }};

  &:after {
    transition: 0.4s all;

    content: '';
    display: ${({ isLast }) => isLast && 'none'};
    height: 100%;
    width: 4px;
    background: ${({ theme, completed, active }) => {
      if (active) return theme.colors.silver
      if (completed) return theme.colors.secondary
      return theme.colors.silver
    }};
    position: absolute;
    right: calc(50% + -2px);
    bottom: -32px;
    z-index: 1;
  }
`
