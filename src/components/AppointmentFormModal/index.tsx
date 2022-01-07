import { useState } from 'react'
import { Avatar, Column, FadeWhenAppear, Modal, Row, Textfield } from '..'
import { Button } from '../../components'
import { DatePicker } from '../DatePicker/styles'
import { Label } from '../Label/styles'
import * as S from './styles'

function AppointmentFormModal({
  isOpen,
  onClose,
  name,
  avatar,
  privatePrice,
  hours,
  healthInsurances,
  specialties,
}) {
  const [selectedHour, setSelectedHour] = useState('')
  const [selectedHealthInsurance, setSelectedHealthInsurance] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')

  const isParticular = selectedHealthInsurance === 'particular'

  const onSchedule = () => alert('Agendar')

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Row>
        <Column size={12}>
          <S.Spaced>
            <h1>Agendar consulta</h1>
            <div>Fechar</div>
          </S.Spaced>
        </Column>
        <Column size={12}>
          <S.Grid>
            <S.Informations>
              <div>
                <Avatar src={avatar} alt="alt" />
              </div>
              <div>
                <strong>{name}</strong>
              </div>
            </S.Informations>
            <S.Schedule>
              <Row marginBottom="24px">
                <Column size={12}>
                  <DatePicker placeholderText="Data consulta" />
                </Column>
              </Row>

              <Row marginBottom="24px">
                {hours.map((hour) => (
                  <Column key={hour} size={3}>
                    <Button
                      fullWidth
                      onClick={() => setSelectedHour(hour)}
                      variant={selectedHour === hour ? 'primary' : 'silver'}
                    >
                      {hour}
                    </Button>
                  </Column>
                ))}
              </Row>

              <Row marginBottom="24px">
                {specialties.map((specialty) => (
                  <Column key={specialty} size={4}>
                    <Button
                      fullWidth
                      onClick={() => setSelectedSpecialty(specialty)}
                      variant={
                        selectedSpecialty === specialty ? 'primary' : 'silver'
                      }
                    >
                      {specialty}
                    </Button>
                  </Column>
                ))}
              </Row>

              <Row marginBottom="24px">
                {healthInsurances.map((insurance) => (
                  <Column key={insurance} size={4}>
                    <Button
                      fullWidth
                      onClick={() => setSelectedHealthInsurance(insurance)}
                      variant={
                        selectedHealthInsurance === insurance
                          ? 'primary'
                          : 'silver'
                      }
                    >
                      {insurance}
                    </Button>
                  </Column>
                ))}
              </Row>

              {isParticular && (
                <FadeWhenAppear>
                  <Row>
                    <Column size={12}>
                      Preço da consulta particular: R$ {privatePrice}
                    </Column>
                  </Row>
                </FadeWhenAppear>
              )}

              {selectedHealthInsurance && !isParticular && (
                <FadeWhenAppear>
                  <Row>
                    <Column size={12}>
                      <Label>Número da carteira</Label>
                      <Textfield placeholder="Digite aqui" />
                    </Column>
                    <Column size={12}>
                      <Label>Vencimento</Label>
                      <Textfield placeholder="Digite aqui" />
                    </Column>
                  </Row>
                </FadeWhenAppear>
              )}
            </S.Schedule>
          </S.Grid>
        </Column>
        <Column size={12} justifySelf="end">
          <Button onClick={onSchedule}>Agendar</Button>
        </Column>
      </Row>
    </Modal>
  )
}

export default AppointmentFormModal
