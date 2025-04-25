import React from 'react';
import './position.scss';

export default function Position(variables) {
  return (
    <div className='position'>
      <span className='position__company h3'>{ variables.company }</span>
      <span className='position__title'>{ variables.title }</span>
      <span className='position__dates'>{ variables.dates }</span>
      { variables.content }
    </div>
  );
}
