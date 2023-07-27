import '../styles/Analytics.css'
import { Analytic } from './Analytic'

export function Analytics ({ title, value, percentage, isPositive }) {
  // Calcula el stroke-dasharray basándose en el porcentaje
  return (
    <div className='Analytics'>
      <h1>Analytics</h1>
      <div className='analyse'>
        <Analytic
          title='Total Sales'
          value='65.024€'
          percentage={65}
          isPositive
        />
        <Analytic
          title='Site Visits'
          value={2307}
          percentage={48}
          isPositive={false}
        />
        <Analytic
          title='Searches'
          value={14762}
          percentage={75}
        />
      </div>
    </div>
  )
}
