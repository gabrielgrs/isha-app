import { rgba } from 'polished'
import styled from 'styled-components'

export const Textfield = styled.input`
  width: 100%;
  border: none;
  background: ${({ theme }) => rgba(theme.colors.silver, 0.7)};
  height: 48px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.borders.radius};
  transition: 0.4s;
  font-size: 1em;

  &:focus {
    background: ${({ theme }) => theme.colors.silver};
    border: none;
    outline: none;
  }
`
