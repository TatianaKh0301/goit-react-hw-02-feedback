import PropTypes from 'prop-types';
import {Notification} from 'components/Notification';
import { StatisticsWrapper, StatisticsInfo } from './Statistics.styled';
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <div>
            {total>0 ? <StatisticsWrapper>
                            <StatisticsInfo>Good: <span>{good}</span></StatisticsInfo>
                            <StatisticsInfo>Neutral: <span>{neutral}</span></StatisticsInfo>
                            <StatisticsInfo>Bad: <span>{bad}</span></StatisticsInfo>
                            <StatisticsInfo>Total:<span>{total}</span></StatisticsInfo>
                            <StatisticsInfo>Positive feedback: {total===0 ? <span>0</span> : <span>{positivePercentage}%</span>}</StatisticsInfo>
                        </StatisticsWrapper>
                      : <Notification message="There is no feedback"/>}                        
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired
}