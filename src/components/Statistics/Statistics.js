import propTypes from 'prop-types'
import s from './Statistics.module.css'


const Statistic= ({
    options, 
    onCountTotalFeedback, 
    onPers}) => (
  <ul className={s.statisticUl}> 
    <li>
    <p>Good: {options.good}</p>
    </li>
    <li>
    <p>Neutral: {options.neutral}</p>
    </li>
    <li>
    <p>Bad: {options.bad}</p>
    </li>
    <li>
    <p>Total: {onCountTotalFeedback}</p>
    </li>
    <li>
    <p>Positive feedback: {onPers}%</p>
    </li>
  </ul>

)

export default Statistic;

Statistic.propTypes = {
    options:
      propTypes.shape({
        good: propTypes.number.isRequired,
        neutral: propTypes.number.isRequired,
        bad: propTypes.number.isRequired,
      }).isRequired, 
    onCountTotalFeedback: propTypes.number,
    onCountPercentagePositiveFeedback: propTypes.number,
};