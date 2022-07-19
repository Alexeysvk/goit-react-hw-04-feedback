import propTypes from 'prop-types'
import s from './Section.module.css'


const Section = ({title, children}) =>(
 <>
   <h2 className={s.feedbackSection}>{title}</h2>  
   {children}
 </>

)

export default Section;

Section.propTypes={
    title: propTypes.string.isRequired,
    children: propTypes.element.isRequired,
}