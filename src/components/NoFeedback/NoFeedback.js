import React from 'react';
import PropTypes from 'prop-types';
import './NoFeedback.css';

const NoFeedback = ({ message }) => <p className="noFeedback">{message}</p>;

NoFeedback.propTypes = {
  message: PropTypes.string,
};

export default NoFeedback;
