import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title, children }) => (
  <section className="section">
    <h1 className="title">{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
