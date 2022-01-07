import { useMemo, useState } from 'react'
import type { NextPage } from 'next'
import { format, addMinutes } from 'date-fns'
import { Column, DatePicker, Layout, Row } from '../../components'
import AppointmentCard from '../../components/AppointmentCard'

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

const appointments = [
  {
    id: Math.random(),
    patient: 'Gabriel Ribeiro',
    paymentType: 'UNIMED',
    date: addMinutes(new Date(), 15),
  },
]

const Agenda: NextPage = () => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date())

  const selectedDateText = useMemo(() => {
    const [month, day, year] = format(selectedDate, 'MM/dd/yyyy').split('/')
    return `${day} de ${months[Number(month)]} de ${year}`
  }, [selectedDate])

  return (
    <Layout
      title="Agenda"
      description="Veja as suas consultas pelo dia selecionado"
    >
      <Row alignItems="center" marginBottom="32px">
        <Column size={4}>
          <h3>Consultas de {selectedDateText}</h3>
        </Column>
        <Column size={2}>
          <DatePicker
            selected={selectedDate}
            onChange={(e) => setSelectedDate(e)}
          />
        </Column>
      </Row>
      <Row marginBottom="24px">
        <Column size={12}>
          <h1>Próximo atendimento</h1>
        </Column>
        {appointments
          .filter((_, index) => index === 0)
          .map((p) => (
            <Column size={4} key={p.id}>
              <AppointmentCard
                patientName={p.patient}
                date={p.date}
                paymentType={p.paymentType}
              />
            </Column>
          ))}
      </Row>
      <Row>
        <Column size={12}>
          <h1>Atendimentos seguintes</h1>
        </Column>
        {appointments
          .filter((_, index) => index > 0)
          .map((p) => (
            <Column size={4} key={p.id}>
              <AppointmentCard
                patientName={p.patient}
                date={p.date}
                paymentType={p.paymentType}
              />
            </Column>
          ))}
      </Row>
    </Layout>
  )
}

export default Agenda
