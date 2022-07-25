import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage }) => (
    <ul className={style.statList}>
        <li className={style.statItem}>Good: {good}</li>
        <li className={style.statItem}>Neutral: {neutral}</li>
        <li className={style.statItem}>Bad: {bad}</li>
        <li className={style.statItem}>Total: {total}</li>
        <li className={style.statItem}>Positive Feedback: {positivePercentage} %</li>
    </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

