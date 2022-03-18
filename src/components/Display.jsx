import './Display.css';
import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  return (
    <div className='Display'>
      <input className='Input' type='text'/>
    </div>
  )
}

Display.propTypes = {};

export default Display;