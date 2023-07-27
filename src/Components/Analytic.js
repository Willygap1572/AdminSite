import '../styles/Analytic.css'

export function Analytic ({ title, value, percentage, isPositive }) {
  const strokeDasharray = 'calc(2 * 3.14159265359 * 36 * ' + percentage + ' / 100) 999'
  let strokeColor = '--color-primary'// default color
  if (isPositive === true) {
    strokeColor = '--color-success'
  } else if (isPositive === false) {
    strokeColor = '--color-danger'
  }
  return (
    <div className='sales'>
      <div className='status'>
        <div className='info'>
          <h3>{title}</h3>
          <h1>{value}</h1>
        </div>
        <div className='progress'>
          <svg className='circle'>
            <circle cx='38' cy='38' r='36' style={{ strokeDasharray, stroke: `var(${strokeColor})` }} />
          </svg>
          <div className='percentage'>
            <p>{isPositive !== undefined ? (isPositive ? '+' : '-') : ''}{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
