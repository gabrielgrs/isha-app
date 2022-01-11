import { useState } from 'react'
import { Column, Row } from '../../../../components'
import { Button } from '../../../../components/Button/styles'
import { Textfield } from '../../../../components/Textfield/styles'

type Props = {
  onPreviousStep: () => void
  onAdvanceStep: () => void
}

function ScheduleData({ onPreviousStep, onAdvanceStep }: Props) {
  const [selected, setSelected] = useState('')
  const profiles = [
    {
      label: 'Médico(a)',
      value: 'doctor',
    },
    {
      label: 'Paciente',
      value: 'patient',
    },
    {
      label: 'Secretário(a)',
      value: 'secretary',
    },
  ]

  return (
    <div>
      <Row>
        <Column size={12}>Eu sou:</Column>
        {profiles.map((p) => (
          <Column size={4} key={p.value}>
            <Button
              variant={p.value === selected ? 'secondary' : 'silver'}
              onClick={() => {
                setSelected(p.value)
              }}
            >
              {p.label}
            </Button>
          </Column>
        ))}
        <Column size={6}>
          <Button fullWidth variant="white" onClick={onPreviousStep}>
            Anterior
          </Button>
        </Column>
        <Column size={6}>
          <Button fullWidth variant="silverSky" onClick={onAdvanceStep}>
            Próximo
          </Button>
        </Column>
      </Row>
    </div>
  )
}

export default ScheduleData
