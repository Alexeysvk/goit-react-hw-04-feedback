import PropTypes from 'prop-types'
import s from './Section.module.css'


function Section ({title, children}){
 return (
 <>
   <h2 className={s.feedbackSection}>{title}</h2>  
   {children}
 </>
 )
}

export default Section;

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	};