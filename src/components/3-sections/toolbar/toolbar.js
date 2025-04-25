import React from 'react';
import './toolbar.scss';

export default function Toolbar() {
  const openWindow = (e) => {
    let buttonId = e.currentTarget.id;
    let windows = document.getElementsByClassName("window");

    if (buttonId === 'all-button') {
      for (let window of windows) {
        window.classList.remove('hidden');
      }
    }
    else {
      let window = document.getElementById(buttonId.replace('-button', ''));
      for (let window of windows) {
        window.classList.remove('active');
      }
      window.classList.add('active');
      window.classList.remove('hidden');
    }
  }

  return (
    <nav className='toolbar'>
      <button
        id='all-button'
        onClick={(e) => openWindow(e)}
        className='toolbar__main open'
        aria-label='Open all windows'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
      </button>
      <button
        id='summary-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>Summary</button>
      <button
        id='about-me-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>About Me</button>
      <button
        id='work-experience-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>Work Experience</button>
      <button
        id='portfolio-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>Portfolio</button>
    </nav>
  );
}