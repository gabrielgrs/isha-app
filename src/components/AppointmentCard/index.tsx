// patientName={p.patient}
// date={p.date}
// paymentType={p.paymentType}

import { useMemo } from 'react'
import { format } from 'date-fns'
import * as S from './styles'

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

type Props = {
  patientName: string
  date: Date
  paymentType: string
}

function AppointmentCard({ patientName, date, paymentType }: Props) {
  const dateText = useMemo(() => {
    const text = format(date, 'MM/dd/yyyy/HH/mm')
    const [month, day, year, hour, minute] = text.split('/')
    return `${day} de ${months[Number(month)]}, ${year} às ${hour}:${minute} `
  }, [date])

  return (
    <S.Card>
      <S.Header>
        <S.HintText>Informações do atendimento</S.HintText>
        <div>{dateText}</div>
      </S.Header>
      <S.Content>
        <div>
          <strong>Paciente:</strong> {patientName}
        </div>
        <div>
          <strong>Tipo:</strong> {paymentType}
        </div>
      </S.Content>
      <S.Footer>Acessar</S.Footer>
    </S.Card>
  )
}

export default AppointmentCard
