import './Button.css';
import React from 'react';
import PropTypes from 'prop-types';   

const Button = props => {
  const {label} = props;
  return (
    <div>Button</div>
  )
}

Button.propTypes = {
  label:PropTypes.string.isRequired
};

export default Button;