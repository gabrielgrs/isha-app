import * as S from './styles'

function Avatar({ src, alt }) {
  return (
    <S.Container>
      <S.Image src={src} alt={alt} />
    </S.Container>
  )
}

export default Avatar
