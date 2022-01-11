import { useState } from 'react'
import { Check, PenTool } from 'react-feather'
import { FadeWhenAppear } from '../../components'
import * as S from './styles'
import steps from './steps'

function Onboarding() {
  const [step, setStep] = useState(0)

  const { component: Component, title } = steps[step]

  return (
    <S.Container>
      <S.Steps>
        {steps.map((s, index) => (
          <S.Step
            key={s.title}
            onClick={() => index <= step && setStep(index)}
            isFirst={index === 0}
            isLast={1 + index === steps.length}
            completed={index < step}
            active={index === step}
          >
            {index < step && <Check height={16} />}
            {index === step && <PenTool height={16} />}
          </S.Step>
        ))}
      </S.Steps>
      <S.ContentWrapper>
        <S.Content>
          <FadeWhenAppear key={step}>
            <h1 style={{ textAlign: 'center', paddingBottom: 32 }}>{title}</h1>
            <Component
              onPreviousStep={() => setStep((step) => step - 1)}
              onAdvanceStep={() => setStep((step) => step + 1)}
            />
          </FadeWhenAppear>
        </S.Content>
      </S.ContentWrapper>
      {/* <S.Actions>
        <ArrowLeft
          size={32}
          onClick={() => step > 0 && setStep((p) => p - 1)}
          cursor={step === 0 ? 'not-allowed' : 'pointer'}
        />
        <S.Steps>
          {Array.from({ length: steps.length }).map((_, index) => (
            <S.Step
              key={index}
              active={index === step}
              onClick={() => setStep(index)}
            />
          ))}
        </S.Steps>
        <ArrowRight
          size={32}
          onClick={() => step !== steps.length && setStep((p) => p + 1)}
          cursor={step === steps.length ? 'not-allowed' : 'pointer'}
        />
      </S.Actions> */}
    </S.Container>
  )
}

export default Onboarding
