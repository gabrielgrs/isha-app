import { useMemo, useState } from 'react'
import type { NextPage } from 'next'
import { format, addMinutes } from 'date-fns'
import {
  Button,
  Column,
  DatePicker,
  Layout,
  Row,
  Textfield,
} from '../../components'
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

const doctors = [
  {
    id: Math.random(),
    patient: 'Gabriel Ribeiro',
    paymentType: 'UNIMED',
    date: addMinutes(new Date(), 15),
  },
]

const Agenda: NextPage = () => {
  const [name, setName] = useState('')
  const [selectedDate, setSelectedDate] = useState(undefined)

  return (
    <Layout title="Médicos" description="Encontre seu médico">
      <Row alignItems="center" marginBottom="32px">
        <Column size={3}>
          <Textfield placeholder="Nome do médico" />
        </Column>
        <Column size={2}>
          <DatePicker
            selected={selectedDate}
            placeholderText="Data consulta"
            onChange={(e) => setSelectedDate(e)}
          />
        </Column>
        <Column size={7} justifySelf="end">
          <Button>Procurar</Button>
        </Column>
      </Row>

      <Row>
        {doctors.map((p) => (
          <Column size={3} key={p.id}>
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
