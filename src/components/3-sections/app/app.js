import React, { useState, useEffect, useRef } from 'react';
import './app.scss';
import Scroller from '../../1-elements/scroller/scroller.js';
import Card from '../../1-elements/card/card.js';
import Window from '../../2-blocks/window/window.js';
import EmailCanvas from '../../2-blocks/email-canvas/email-canvas.js';
import Word from '../../2-blocks/word/word.js';
import Resume from './SekreterResume2025.pdf';

export default function App() {
  const [isLoaded, setIsLoaded] = useState('');
  const frontRef = useRef(null);
  const [activeErrors, setActiveErrors] = useState([]);
  const [, setErrorWindows] = useState([
    {
      title: 'ERROR: Unknown Software',
      content: <div className='window__base'><b>ERROR</b><br /><br />Broken software detected. Your software may be broken or corrupted, please update your software to be compatible with your operating system.</div>,
      styles: { top: '100px', left: '500px' }
    },
    {
      title: 'ERROR: system32 modified',
      content: <div className='window__base'><b>ERROR</b><br /><br />A change has been detected within system32. Please revert changes before continuing.</div>,
      styles: { top: '50px', left: '150px' }
    },
    {
      title: 'ERROR: f00-3214-DI1230',
      content: <div className='window__base'>2134-2134324 546-GE7008f dsaf324 124 2141234 21asfasfd afdsaf</div>,
      styles: { top: '150px', left: '300px' }
    },
    {
      title: 'limewire',
      content: <div className='window__base'>Download free music at limewire HD quality free no virus listen to top songs free HD now</div>,
      styles: { top: '280px', left: '10px' }
    },
    {
      title: 'Seriously?',
      content: <div className='window__base'>Weren't you taught not to click on suspicious links?</div>,
      styles: { top: '330px', left: '250px' }
    },
    {
      title: 'FREE ANTIVIRUS',
      content: <div className='window__base'>DOWNLOAD FREE ANTIVIRUS TODAY! PROTECT YOUR DATA FROM INTERNET THREATS NOW!</div>,
      styles: { top: '80px', left: '670px' }
    },
    {
      title: 'ERROR: ',
      content: <div className='window__base'><b>ERROR</b><br /><br />o no</div>,
      styles: { top: '400px', left: '630px' }
    },
    {
      title: 'ERROR: DANGEROUS SOFTWARE DETECTED!',
      content: <div className='window__base'><b>ERROR</b><br /><br />DANGEROUS SOFTWARE DETECTED! SEND YOUR CREDIT CARD INFORMATION TO thisisafakeemail@hotmail.com IMMEDIATELY!!!!!!</div>,
      styles: { top: '410px', left: '80px' }
    },
    {
      title: 'ERROR: Aw Dang It',
      content: <div className='window__base'>Well, it's been an honor gentlemen...</div>,
      styles: { top: '220px', left: '580px' }
    }
  ]);

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  };
  
  const cardImages = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
  const [cardContent, ] = useState([
    {
      title: 'This Website!',
      subtitle: '2021, 2025',
      background: cardImages['banner-portfolio.jpg'],
      content: (
        <>
          <p>My personal website, used for displaying the projects I have created as well as showing off any skills I have recently picked up. This site has been built utilizing React,
            and as of 2025 it has received a new site overhaul to show off the improvements I have made as a developer.</p>
          <p><b>Created Using: HTML, SCSS, JavaScript, React, Webpack</b></p>
          <a href="https://github.com/NoahSekreter/NoahSekreter.github.io" className="button" rel="noreferrer" target="_blank" aria-label="Visit this website's GitHub repo">Github Page</a>
        </>
      )
    },
    {
      title: 'ASPPH',
      subtitle: '2025',
      background: cardImages['banner-aspph.jpg'],
      content: (
        <>
          <p>A more recent project that I was involved in, this is a Wordpress-based environemnt utilizing component-driven Agile-sprints for an updated Homepage</p>
          <p><b>Created Using: Wordpress, Timber/Twig, CSS, SCSS, JavaScript, PHP, ACF, Figma</b></p>
          <a href="https://aspph.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit ASPPH website">Website</a>
        </>
      )
    },
    {
      title: 'AIAG',
      subtitle: '2025',
      background: cardImages['banner-aiag.jpg'],
      content: (
        <>
          <p>Collaborated in a team to rebuild a website, utilizing Storybook as the primary development tool to create, organize, and test the components developed for the site.</p>
          <p><b>Created Using: Timber/Twig, SCSS, JavaScript, Storybook, Figma</b></p>
          <a href="https://www.aiag.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit AIAG website">Website</a>
        </>
      )
    },
    {
      title: 'MJHS (Main & Elderplan)',
      subtitle: '2023 - 2025',
      background: cardImages['banner-mjhs-org.jpg'],
      content: (
        <>
          <p>Modernized a large portion of the site as part of a team-wide site refresh project, working primarily on homepage and mega-menu enhancements.</p>
          <p><b>Created Using: Wordpress, CSS, SASS, JavaScript, PHP, ACF, Figma</b></p>
          <a href="https://www.mjhs.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit MJHS main website">Main Website</a><br />
          <a href="https://www.elderplan.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit MJHS Eldeprlan website">Elderplan Website</a>
        </>
      )
    },
    {
      title: 'UNICEF USA',
      subtitle: '2023 - 2024',
      background: cardImages['banner-unicef.jpg'],
      content: (
        <>
          <p>Part of a team handling continuous maintenance and improvement, I have handled various Drupal block updates and page hero enhancements</p>
          <p><b>Created Using: Drupal, Twig, CSS, SCSS, JavaScript, jQuery, PHP, YML, Layout Builder, Figma</b></p>
          <a href="https://unicefusa.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit UNICEF USA website">Website</a>
        </>
      )
    },
    {
      title: 'CenFill',
      subtitle: '2019',
      background: cardImages['banner-cenfill.jpg'],
      content: (
        <>
          <p>During my time at BBG, I have taught myself Python in order to automate the company's workflow. I have created a program, which I distributed among the company, that allows a user to automate filling out Excel spreadsheets. Over time, this program evolved to include <a href="https://smartsheet.redoc.ly/">Smartsheets API</a> and <a href="https://developer.cms.gov/marketplace-api/">Marketplace API</a> integration.</p>
          <p><b>Created Using: Python, Smartsheets API, Marketplace API</b></p>
          <a href="https://github.com/NoahSekreter/CenFill" className="button" rel="noreferrer" target="_blank" aria-label="Visit the CenFill Github repo">Github Page</a>
        </>
      )
    },
    {
      title: 'Cleveland Hardware',
      subtitle: '2017-2019',
      background: cardImages['banner-cleveland-hardware.jpg'],
      content: (
        <>
          <p>After attending WeCan{'{Code}'}It, I was brought on to Cleveland Hardware to rebuild their old website, including adding an eCommerce system.</p>
          <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, PHP</b></p>
          <a href="https://clevelandhardware.com/" className="button" rel="noreferrer" target="_blank" aria-label="Website no longer available">Website (No Longer Available)</a>
        </>
      )
    },
    {
      title: 'Lucky Paws',
      subtitle: '2017',
      background: cardImages['banner-lucky-paws.jpg'],
      content: (
        <>
          <p>During my time at Stream9 I have updated the site homepage and the list of animals available for adoption.</p>
          <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, PHP</b></p>
          <a href="https://luckypawsrescue.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit Lucky Paws website">Website</a>
        </>
      )
    },
  ])

  // Establish a trigger checker, as StrictMode React sometimes double-runs a function (For whatever cursed reason)
  let BlueScreenTrigger = useRef(false);
  function createBlueScreen() {
    if (BlueScreenTrigger.current) return;
    BlueScreenTrigger.current = true;

    const delays = [100, 3500, 2800, 2000, 1200, 1000, 800, 600, 600, 1000]; // ms
  
    function triggerComponent(index) {
      if (window.innerWidth <= 760) {  
        document.querySelectorAll('.window').forEach(element => { element.style.display = 'none'; });        
      }
  
      if (index < delays.length) {
        setTimeout(() => {
          // Use functional update to get latest error windows
          let nextWindow;

          setErrorWindows(prevErrors => {
            if (prevErrors.length > 0) {
              [nextWindow, ...prevErrors] = prevErrors;
              return prevErrors; // return remaining errors
            } else {
              document.querySelector('.blue-screen')?.classList.add('active');
              return prevErrors;
            }
          });

          if (nextWindow) {
            setActiveErrors(prev => {
              // Prevent accidental duplicates
              if (prev.find(win => win.title === nextWindow.title)) return prev;
              return [...prev, nextWindow];
            });
          }

          triggerComponent(index + 1);
        }, delays[index]);
      }
    }

    triggerComponent(0);
  }

  useEffect(() => {
    setIsLoaded('initializing');

    const initTimer = setTimeout(() => { setIsLoaded('initialized'); }, 4000);

    let frameId;
    let start = null;
    const easing = (t) => (--t) * t * t + 1; // easeOutCubic

    const yStart = (100 / window.innerHeight) * 100 * window.innerHeight / 20;
    let scrollX = 0;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const yElapsed = Math.max(0, elapsed - 2000); // 2 second delay
      const yProgress = Math.min(yElapsed / 3000, 1); // 3 second transition duration
      const eased = easing(yProgress);

      const y = yStart + (100 - yStart) * eased;

      scrollX += 0.5;
      const x1 = (-scrollX * 1.0) + 500;
      const x2 = (-scrollX * 0.6) + 100;
      const x3 = -scrollX * 0.3;

      if (frontRef.current) {
        frontRef.current.style.backgroundPosition = `
          ${x1}px calc(${y}% * 1.2),
          ${x2}px ${y}%,
          ${x3}px ${y}%
        `;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      clearTimeout(initTimer);
      cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <main
      ref={frontRef}
      className={['app', isLoaded].join(' ')}>
      <Window
        title="Summary"
        id="summary"
        styles= { { left: '16px', height: '450px' } }
        content={
          <>
            <div className='window__base'>
              <div className='window__title'>
                <h1>Noah Sekreter</h1>
                <div className='h3'>Front-End Web Developer</div>
              </div>
              <Scroller />
              <p><b>Current Career Status: Available for employment, looking for a Web Developer position in the Chicago area if onsite, or
                a remote position anywhere.</b></p>
              <div className='window__links'>
                <a rel="noreferrer" href={ Resume } target='_blank'>View Resume</a>
                <a rel="noreferrer" href="https://github.com/NoahSekreter" target='_blank'>View GitHub</a>
                <a rel="noreferrer" href="https://www.linkedin.com/in/sekreter" target='_blank'>View LinkedIn</a>
                <a rel="noreferrer" href="mailto:nsekreter@gmail.com" target='_blank'>E-Mail me at nsekreter@gmail.com</a>  
              </div>
            </div>
          </>
        }
      />

      <Window
        title="About Me"
        id="about-me"
        hidden="true"
        styles= { { top: '46px', left: '46px', height: '500px', width: '800px' } }
        content={ <Word /> }
      />

      <Window
        title="Work Experience"
        id="work-experience"
        hidden="true"
        styles= { { top: '76px', left: '76px', height: '450px', width: '1000px' } }
        content={ <EmailCanvas inheritFunc={ createBlueScreen } /> }
      />

      <Window
        title="Portfolio"
        id="portfolio"
        hidden="true"
        styles= { { top: '106px', left: '106px', height: '400px' } }
        content={
          <>
            {/* <h2>Portfolio</h2> */}
            { cardContent.map((item, i) => ( <Card key={i} title={item.title} subtitle={item.subtitle} background={item.background} content={item.content}/> ))}
          </>
        }
      />

      {activeErrors.map((item, i) => ( <Window key={i} title={item.title} content={item.content} styles={item.styles} /> ))}
    </main>
  );
}
