import propTypes from 'prop-types';
import s from './ButtonsFeedback.module.css';

function ButtonsFeedback ({ options, onCountFeedback }) {
    const btnsName= Object.keys(options)

    return (
    <ul className={s.wrap}>
        {btnsName.map(name => (
            <li key={btnsName.indexOf(name)}>
                <button
                    className={s.button}
                    type='button'
                    name={name}
                    onClick={() => onCountFeedback(name)}
                >
                    {name}
                </button>
            </li>
        ))}
    </ul>
    )
};

export default ButtonsFeedback;


ButtonsFeedback.propTypes = {
    options: propTypes.shape({
          good: propTypes.number.isRequired,
          neutral: propTypes.number.isRequired,
          bad: propTypes.number.isRequired,
        }).isRequired,
    onCountFeedback: propTypes.func.isRequired,
};