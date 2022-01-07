import { useMemo, useState } from 'react'
import type { NextPage } from 'next'
import { format, addMinutes } from 'date-fns'
import {
  Button,
  Column,
  DatePicker,
  Layout,
  Modal,
  Row,
  Textfield,
} from '../../components'
import DoctorCard from '../../components/DoctorCard'
import AppointmentFormModal from '../../components/AppointmentFormModal'

const doctors = [
  {
    id: Math.random(),
    name: 'Gabriel Ribeiro',
    healthInsurances: ['particular', 'unimed'],
    specialties: ['homeopatia', 'clínica geral'],
    price: 250,
  },
]

const Agenda: NextPage = () => {
  const [name, setName] = useState('')
  const [selectedDate, setSelectedDate] = useState(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onPressToSchedule = () => {
    setIsModalOpen(true)
  }

  return (
    <Layout title="Médicos" description="Encontre seu médico">
      <Row alignItems="center" marginBottom="32px">
        <Column size={3}>
          <AppointmentFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            name="Fulano"
            avatar="https://png.pngtree.com/png-clipart/20190303/ourlarge/pngtree-hand-drawn-cute-doctor-png-image_736275.jpg"
            privatePrice={100.5}
            hours={['10:00', '10:15', '10:30']}
            healthInsurances={['particular', 'unimed']}
            specialties={['homeopatia', 'clínica geral']}
          />
          <Textfield placeholder="Nome do médico" />
        </Column>
        <Column size={2}>
          <DatePicker
            selected={selectedDate}
            placeholderText="Data consulta"
            onChange={(e: any) => setSelectedDate(e)}
          />
        </Column>
        <Column size={7} justifySelf="end">
          <Button>Procurar</Button>
        </Column>
      </Row>

      <Row>
        {doctors.map((d) => (
          <Column size={4} key={d.id}>
            <DoctorCard
              doctorName={d.name}
              specialties={d.specialties}
              healthInsurances={d.healthInsurances}
              price={d.price}
              onPressToSchedule={onPressToSchedule}
            />
          </Column>
        ))}
      </Row>
    </Layout>
  )
}

export default Agenda
