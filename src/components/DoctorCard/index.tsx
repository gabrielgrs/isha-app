import * as S from './styles'

type Props = {
  doctorName: string
  price?: number | string
  specialties: string[]
  healthInsurances: string[]
  onPressToSchedule: () => void
}

function DoctorCard({
  doctorName,
  price,
  specialties,
  healthInsurances,
  onPressToSchedule,
}: Props) {
  return (
    <S.Card>
      <S.Header>
        <S.HintText>Informações do médico</S.HintText>
        {/* <div>{dateText}</div> */}
      </S.Header>
      <S.Content>
        <div>
          <strong>Nome:</strong> {doctorName}
        </div>
        <div>
          <strong>Preço:</strong> R$ {price}
        </div>
        <div>
          <strong>Especialidades:</strong> {specialties.join(', ')}
        </div>
        <div>
          <strong>Convênios:</strong> {healthInsurances.join(', ')}
        </div>
      </S.Content>
      <S.Footer onClick={onPressToSchedule}>Agendar</S.Footer>
    </S.Card>
  )
}

export default DoctorCard
