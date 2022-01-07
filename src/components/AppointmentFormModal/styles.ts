import { rgba } from 'polished'
import styled from 'styled-components'

export const Overlay = styled.div`
  background: ${({ theme }) => rgba(theme.colors.black, 0.3)};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  width: 95%;
  max-width: 768px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
`

export const Spaced = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Schedule = styled.div``
