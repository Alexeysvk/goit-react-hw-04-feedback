import PropTypes from 'prop-types';
import s from './ButtonsFeedback.module.css';

function ButtonsFeedback ({ options, onCountFeedback }) {
 return options.map( option => (
      <div key={option} className={s.wrap}>
             <button
                className={s.button}
                type='button'
                onClick={onCountFeedback}
                >
                {option}
            </button>
        
    </div>
 )
 )

};

export default ButtonsFeedback;


ButtonsFeedback.propTypes = {
        options: PropTypes.arrayOf(PropTypes.shape).isRequired,
        onCountFeedback: PropTypes.func.isRequired,
    };