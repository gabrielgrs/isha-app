import styled from 'styled-components'
import { colors } from '../../styles/theme'

type Props = {
  variant?: keyof colors
  fullWidth?: boolean
}

export const Button = styled.button<Props>`
  border: none;
  outline: none;
  height: 42px;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.borders.radius};
  background: ${({ theme, variant = 'primary' }) => theme.colors[variant]};
  color: ${({ theme, variant = 'primary' }) => theme.contrasts[variant]};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  white-space: nowrap;

  &:hover {
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.7);
  }
`
