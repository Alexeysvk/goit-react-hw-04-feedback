import PropTypes from 'prop-types'
import s from './Statistics.module.css'


function Statistic({good, neutral, bad, total, onPers}) {
  return (
  <ul className={s.statisticUl}> 
    <li>
    <p>Good: {good}</p>
    </li>
    <li>
    <p>Neutral: {neutral}</p>
    </li>
    <li>
    <p>Bad: {bad}</p>
    </li>
    <li>
    <p>Total: {total}</p>
    </li>
    <li>
    <p>Positive feedback: {onPers}%</p>
    </li>
  </ul>

  )
}
export default Statistic;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPers: PropTypes.number.isRequired,
};