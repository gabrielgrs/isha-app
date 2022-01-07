import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
`

export const Header = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px 12px 0 0;
  text-align: center;
  padding: 8px 0;
`

export const HintText = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.silver};
  font-style: italic;
`

export const Content = styled.div`
  padding: 16px;
`

export const Footer = styled.div`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 12px 12px;
  text-align: center;
  padding: 2px 0;
  font-size: 0.9em;
`
