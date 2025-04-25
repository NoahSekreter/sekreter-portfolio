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
        onClick={(e) => openWindow(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/></svg>
          Summary</button>
      <button
        id='about-me-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
          About Me</button>
      <button
        id='work-experience-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
          Work Experience</button>
      <button
        id='portfolio-button'
        className='toolbar__tab'
        onClick={(e) => openWindow(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/></svg>
          Portfolio</button>
    </nav>
  );
}