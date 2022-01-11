import PersonalData from './PersonalData'
import UsageData from './UsageData'
import ScheduleData from './ScheduleData'

export const steps = [
  {
    title: 'Dados pessoais',
    component: PersonalData,
  },
  {
    title: 'Dados de uso',
    component: UsageData,
  },
  {
    title: 'Agenda',
    component: ScheduleData,
  },
]

const _ = () => null
export default _
