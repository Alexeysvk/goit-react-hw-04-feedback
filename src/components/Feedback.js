import  {useState} from "react";
import PropTypes from 'prop-types'
import Section from './Section/Section'
import Notification from "./Notification/Notification";
import ButtonsFeedback from './ButtonsFeedback/ButtonsFeedback'
import Statistic from './Statistics/Statistics'


export default function Feedback(){
 const [good, setGood]= useState(0);
 const [neutral, setNeutral]= useState(0);
 const [bad, setBad]= useState(0);

 const feedbackButton= ["Good", "Neutral", "Bad"];

 const handleChange= e =>{
   const name = e.currentTarget.innerText;

  switch(name) {
    case 'Good':
      setGood(good + 1);
      break;

    case 'Neutral':
      setNeutral(neutral + 1);
      break;
    
    case 'Bad':
      setBad(bad + 1 );
      break;

      default:
        return;
  }
 }

 const countTotalFeedback = ()=>{
  const total = bad + neutral + good;
  return total;
};

  const countPositiveFeedbackPercentage= ()=>{
    const positiveFeedback= Math.floor((good * 100) / countTotalFeedback());
    return positiveFeedback;
  }


  return(
   
       <section>
           <Section title="Please leave feedback">
            <ButtonsFeedback 
                options={feedbackButton}
                onCountFeedback = {handleChange}
                />
           </Section>
                {countTotalFeedback() ? (
                  <Section title="Statistics">
                    <Statistic
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        onPers={countPositiveFeedbackPercentage()}
                    ></Statistic>
                     </Section>
                ) : (
                <Notification message="No feedback given" />
                )}           
        </section>
    )
}


Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,    
};

