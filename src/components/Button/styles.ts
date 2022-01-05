import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  outline: none;
  height: 42px;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.borders.radius};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.7);
  }
`
