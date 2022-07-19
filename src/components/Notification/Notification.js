import propTypes from 'prop-types';
import s from './Notification.module.css'


const Notification = ({message})=>{
    return <h2 className={s.notification}>{message}</h2>
}

Notification.propTypes = {
    message: propTypes.string.isRequired,
  };

export default Notification;