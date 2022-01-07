import styled from 'styled-components'

const FadeWhenAppear = styled.div`
  animation: fadeWhenAppear 0.4s;

  @keyframes fadeWhenAppear {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }
`

export default FadeWhenAppear
