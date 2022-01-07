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
  animation: overlayAppears 0.4s;

  @keyframes overlayAppears {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.white};
  width: 95%;
  max-width: 768px;
  padding: 8px 16px 16px 16px;
  border-radius: 8px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.3);
  animation: modalAppears 0.4s;

  ${({ theme }) => theme.breakPoints.mobile} {
    bottom: 0;
    top: initial;
    height: 95vh;
    transform: translate(0, 0);
    left: 0;
    width: 100%;
    animation: modalAppearsMobile 0.4s;
    border-radius: 12px 12px 0 0;

    @keyframes modalAppearsMobile {
      from {
        transform: translateY(100vh);
      }

      to {
        transform: translateY(0);
      }
    }
  }

  @keyframes modalAppears {
    from {
      opacity: 0;
      margin-top: 100%;
    }

    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`
