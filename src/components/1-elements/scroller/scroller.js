import React, { useEffect, useRef } from 'react';
import './scroller.scss';

export default function Scroller() {
  const scrollerRef = useRef(null);
  let scrollPos = useRef(0);
  let frameId = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const span = scroller.querySelector('span');

    function animate() {
      scrollPos.current += 0.5;
      scroller.scrollLeft = scrollPos.current;

      if (scrollPos.current >= span.offsetWidth) {
        scrollPos.current = 0;
        scroller.scrollLeft = 0;
      }

      frameId.current = requestAnimationFrame(animate);
    }

    frameId.current = requestAnimationFrame(animate);

    return () => { cancelAnimationFrame(frameId.current); };
  }, []);

  return (
    <div className="carousel" ref={scrollerRef} tabIndex={-1}>
      <span>HTML5, Twig/Timber, CSS, SASS/SCSS, Bootstrap, JavaScript, jQuery, React, PHP, Drupal, Wordpress, mySQL, Python, Storybook, Webpack, Vite, ESLint, Agile SCRUM, C#, MVC, ASP.NET -&nbsp;</span>
      <span>HTML5, Twig/Timber, CSS, SASS/SCSS, Bootstrap, JavaScript, jQuery, React, PHP, Drupal, Wordpress, mySQL, Python, Storybook, Webpack, Vite, ESLint, Agile SCRUM, C#, MVC, ASP.NET -&nbsp;</span>
    </div>
  );
}
