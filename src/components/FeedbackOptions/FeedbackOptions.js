import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map( button => {
        return (
            <button 
            key={button}
            type="button"
            onClick={onLeaveFeedback}
            name={button}
            className={style.buttonFeedback}
            >
            {button}
            </button>
        )
    })
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };