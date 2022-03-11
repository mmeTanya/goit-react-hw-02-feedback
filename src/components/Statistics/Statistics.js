import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="statistics__list">
    <li className="statistics__item">
      <p className="statistics__text">Good : {good}</p>
    </li>
    <li className="statistics__item">
      <p className="statistics__text">Neutral : {neutral}</p>
    </li>
    <li className="statistics__item">
      <p className="statistics__text">Bad : {bad}</p>
    </li>
    <li className="statistics__item">
      <p className="statistics__text">Total : {total}</p>
    </li>
    <li className="statistics__item">
      <p className="statistics__text">
        Positive feddback : {positivePercentage}
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
