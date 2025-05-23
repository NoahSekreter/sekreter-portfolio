import React, {useRef} from 'react';
import './card.scss';

export default function Card(variables) {
  const cardRef = useRef(null);

  const openCard = () => {
    cardRef.current.classList.toggle('open');
  }

  return (
    <div className='card'>
      <button
        className='card__cover'
        ref={cardRef}
        onClick={openCard}
        style={{'--bg': `url(${variables.background})`}} >
        <div className='card__heading'>
          <div className='card__title h3'>{ variables.title }</div>
          <div className='card__subtitle'>{ variables.subtitle }</div>
        </div>
        <div className='card__icon'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </div>
      </button>
      <div className='card__content'>
        { variables.content }
      </div>
    </div>
  )
}
