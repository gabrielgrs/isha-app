import PersonalData from './PersonalData'
import UsageData from './UsageData'
import ScheduleData from './ScheduleData'

const steps = [
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

export default steps
