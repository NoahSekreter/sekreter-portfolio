import React, { useEffect } from 'react';
import './scroller.scss';

export default function Scroller() {
  useEffect(() => {
    let scr = 0;

    const scroller = document.getElementsByClassName('carousel')[0];
    const span = scroller.querySelector('span');

    // Set initial scroll position
    scroller.scrollLeft = 0;

    // Clone the span and append it
    const clone = span.cloneNode(true);
    scroller.appendChild(clone);

    // Start scrolling
    setInterval(() => {
      scroller.scrollLeft = scr++;
      if (scr >= span.offsetWidth) {
        scr = 0;
      }
    }, 32);
  });

  return (
    <div className='carousel'>
      <span>HTML5, Twig/Timber, CSS, SASS/SCSS, Bootstrap, JavaScript, jQuery, React, PHP, Drupal, Wordpress, mySQL, Python, Storybook, Webpack, Vite, ESLint, Agile SCRUM, C#, MVC, ASP.NET -&nbsp;</span>
    </div>
  );
}