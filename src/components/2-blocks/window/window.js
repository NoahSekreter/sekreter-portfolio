import React, { useEffect, useState } from 'react';
import './window.scss';

export default function Window(variables) {  
  const [isLoaded, setIsLoaded] = useState('');

  const setActiveWindow = (e) => {
    let windows = document.getElementsByClassName("window");
    for (let window of windows) {
      window.classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  }

  const closeWindow = (e) => {
    e.currentTarget.parentElement.parentElement.classList.add('hidden');
    e.currentTarget.parentElement.parentElement.classList.remove('active');
    e.currentTarget.parentElement.parentElement.classList.remove('maximized');
  }

  const maxMinWindow = (e) => {
    e.currentTarget.parentElement.parentElement.classList.toggle('maximized');
  }

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.getElementsByClassName("window__top")[0].onmousedown = dragMouseDown;
    elmnt.getElementsByClassName("window__top")[0].ontouchstart = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.ontouchend = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

      // If the element would spill out of the screen, cap the element position
      if (elmnt.offsetTop < 0) { elmnt.style.top = "0px"; }
      if (elmnt.offsetLeft < 0) { elmnt.style.left = "0px"; }
      if (elmnt.offsetTop + elmnt.offsetHeight + 40 > window.innerHeight) {
        elmnt.style.top = (window.innerHeight - elmnt.offsetHeight - 40) + "px";
      }
      if (elmnt.offsetLeft + elmnt.offsetWidth > window.innerWidth) {
        elmnt.style.left = (window.innerWidth - elmnt.offsetWidth) + "px";
      }
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchend = null;
      document.ontouchmove = null;
    }
  }

  function resizeElement(elmnt) {
    const rightHandle = elmnt.querySelector('.resizer--right');
    const bottomHandle = elmnt.querySelector('.resizer--bottom');

    let startX, startY, startWidth, startHeight;

    rightHandle.onmousedown = initRightResize;
    rightHandle.ontouchstart = initRightResize;
    bottomHandle.onmousedown = initBottomResize;
    bottomHandle.ontouchstart = initBottomResize;

    function initRightResize(e) {
      e.preventDefault();
      startX = e.clientX || e.touches?.[0].clientX;
      startWidth = parseInt(document.defaultView.getComputedStyle(elmnt).width, 10);
  
      document.documentElement.onmousemove = doRightResize;
      document.documentElement.onmouseup = stopResize;
      document.documentElement.ontouchmove = doRightResize;
      document.documentElement.ontouchend = stopResize;
    }

    function initBottomResize(e) {
      e.preventDefault();
      startY = e.clientY || e.touches?.[0].clientY;
      startHeight = parseInt(document.defaultView.getComputedStyle(elmnt).height, 10);
  
      document.documentElement.onmousemove = doBottomResize;
      document.documentElement.onmouseup = stopResize;
      document.documentElement.ontouchmove = doBottomResize;
      document.documentElement.ontouchend = stopResize;
    }

    function doRightResize(e) {
      let clientX = e.clientX || e.touches?.[0].clientX;
      const newWidth = startWidth + (clientX - startX);
      elmnt.style.width = `${Math.max(newWidth, 350)}px`;
    }

    function doBottomResize(e) {
      let clientY = e.clientY || e.touches?.[0].clientY;
      const newHeight = startHeight + (clientY - startY);
      elmnt.style.height = `${Math.max(newHeight, 300)}px`;
    }

    function stopResize() {
      document.documentElement.onmousemove = null;
      document.documentElement.onmouseup = null;
      document.documentElement.ontouchmove = null;
      document.documentElement.ontouchend = null;
    }
  }

  useEffect(() => {
    setIsLoaded('initializing');

    const initTimer = setTimeout(() => { setIsLoaded('initialized'); }, 3750);

    let elements = document.getElementsByClassName('window');
    for (let element of elements) {
      dragElement(element);
      resizeElement(element);
    }

    return () => clearTimeout(initTimer);
  }, []);

  return (
    <section
      id={ variables.id }
      onMouseDown={(e) => setActiveWindow(e)}
      onTouchStart={(e) => setActiveWindow(e)}
      className={['window', (variables.hidden ? 'hidden' : 'active'), isLoaded].join(' ')}
      style={ variables.styles }>
      <div className='window__top'>
        <span>{ variables.title }</span>
        <button
          onClick={(e) => maxMinWindow(e)}
          aria-label="Maximize Window"
          className='window__button window__max-min'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z"/></svg>
        </button>
        <button
          onClick={(e) => closeWindow(e)}
          aria-label="Close Window"
          className='window__button window__close'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
      </div>
      <div
        className='window__content'>
        { variables.content }
      </div>
      <div className="resizer resizer--right" />
      <div className="resizer resizer--bottom" />
    </section>
  );
}