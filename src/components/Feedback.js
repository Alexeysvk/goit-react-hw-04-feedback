import React, {Component} from "react";
import Section from './Section/Section'
import Notification from "./Notification/Notification";
import ButtonsFeedback from './ButtonsFeedback/ButtonsFeedback'
import Statistic from './Statistics/Statistics'

export default class Feedback extends Component{
 
state = {
    good: 0,
    neutral: 0,
    bad: 0
}

countFeedback = button => {
    this.setState({ [button]: this.state[button] + 1 });
};

countTotalFeedback(){
  const {good, neutral, bad}= this.state
  const total = good + neutral + bad;
  return total;
}

countPositiveFeedbackPercentage(){
  const total= this.countTotalFeedback()
  const positiveFeedback= Math.round((this.state.good*100) / total)
  return positiveFeedback;
}

render (){
    const {good, neutral, bad}= this.state;
 return (

    <section>
        <Section title="Please leave feedback">
         <ButtonsFeedback 
             options={this.state}
             onCountFeedback = {this.countFeedback}
             />
        </Section>

        {this.countTotalFeedback() === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                        <Section title="Statistics">
                            <Statistic
                                options={{ good, neutral, bad }}
                                onCountTotalFeedback={this.countTotalFeedback()}
                                onPers={this.countPositiveFeedbackPercentage()}
                            />
                        </Section>
                )}
    </section> 
  )

 
};
}

