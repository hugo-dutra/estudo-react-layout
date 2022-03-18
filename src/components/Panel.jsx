import './Panel.css';
import React from 'react'
import { BUTTON_TYPES } from '../constants/enums';
import Button from './Button';

const Panel = props => {
  const buttons = [
    {label:'0', type:BUTTON_TYPES.NUMBER}
  ]
  return (
    <div className='Panel'>
      {buttons.map((btn)=><Button label={btn.label} type={btn.type}/>)}
    </div>
  )
}



export default Panel