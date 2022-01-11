import * as S from './styles'

type Props = {
  src: string
  alt: string
}

function Avatar({ src, alt }: Props) {
  return (
    <S.Container>
      <S.Image src={src} alt={alt} />
    </S.Container>
  )
}

export default Avatar
