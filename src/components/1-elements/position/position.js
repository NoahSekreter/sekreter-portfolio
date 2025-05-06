import React from 'react';
import './position.scss';

export default function Position(variables) {
  return (
    <details className='position'>
      <summary className='position__summary' id={ variables.id }>
        <svg className='envelope' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <svg className='envelope-open' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"/></svg>
        <div>
          <span className="position__title">{ variables.company }</span>
          <span>{ variables.dates }</span>
        </div>
      </summary>
      <div className='position__contents'>
        <div className='company'>{ variables.company }</div>
        <div className='title'>{ variables.title }</div>
        <div className='dates'>{ variables.dates }</div>
        { variables.content }
      </div>
    </details>
  );
}
