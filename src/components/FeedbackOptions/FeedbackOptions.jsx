import PropTypes from 'prop-types';
import { ListWrapper, ListItem, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ListWrapper>
            {options.map(option => (
                <ListItem key={option}>
                    <Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
                </ListItem>
            ))}
        </ListWrapper>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}