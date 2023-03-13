import React, {Component} from "react";
import {Wrapper} from './App.styled';
import {FeedbackOptions} from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Section } from "components/Section";

export class App extends  Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    addFeedback = (option) => {
        this.setState(prevState =>({[option]: prevState[option] + 1}));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Number((((this.state.good / this.countTotalFeedback())) * 100).toFixed(0));
    };
  
    render() {
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);
        return (
            <Wrapper>
                <Section title="Please leave feedback">
                    <FeedbackOptions 
                        options={options}
                        onLeaveFeedback={this.addFeedback}
                    />
                </Section>
                <Section  title="Statistics">
                    <Statistics 
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad} 
                        total={totalFeedback} 
                        positivePercentage={positiveFeedback}
                    />  
                </Section>                                  
            </Wrapper>         
    );
  };  
};
