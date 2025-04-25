import React, { useState, useEffect, useRef } from 'react';
import './app.scss';
import Window from '../../2-blocks/window/window.js';
import Position from '../../1-elements/position/position.js';
import Headshot from './headshot.jpg';
import Resume from './SekreterResume2025.pdf';
import Scroller from '../../1-elements/scroller/scroller.js';


export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const frontRef = useRef(null);

  const [activeErrors, setActiveErrors] = useState([]);
  const [errorWindows, setErrorWindows] = useState([
    {
      title: 'ERROR: Unknown Software',
      content: <p><b>ERROR</b><br /><br />Broken software detected. Your software may be broken or corrupted, please update your software to be compatible with your operating system.</p>,
      styles: { top: '100px', left: '500px' }
    },
    {
      title: 'ERROR: system32 modified',
      content: <p><b>ERROR</b><br /><br />A change has been detected within system32. Please revert changes before continuing.</p>,
      styles: { top: '50px', left: '150px' }
    },
    {
      title: 'ERROR: f00-3214-DI1230',
      content: <p>2134-2134324 546-GE7008f dsaf324 124 2141234 21asfasfd afdsaf</p>,
      styles: { top: '150px', left: '300px' }
    },
    {
      title: 'limewire',
      content: <p>Download free music at limewire HD quality free no virus listen to top songs free HD now</p>,
      styles: { top: '280px', left: '10px' }
    },
    {
      title: 'Seriously?',
      content: <p>Weren't you taught not to click on suspicious links?</p>,
      styles: { top: '330px', left: '250px' }
    },
    {
      title: 'FREE ANTIVIRUS',
      content: <p>DOWNLOAD FREE ANTIVIRUS TODAY! PROTECT YOUR DATA FROM INTERNET THREATS NOW!</p>,
      styles: { top: '80px', left: '670px' }
    },
    {
      title: 'ERROR: ',
      content: <p><b>ERROR</b><br /><br />o no</p>,
      styles: { top: '400px', left: '630px' }
    },
    {
      title: 'ERROR: DANGEROUS SOFTWARE DETECTED!',
      content: <p><b>ERROR</b><br /><br />DANGEROUS SOFTWARE DETECTED! SEND YOUR CREDIT CARD INFORMATION TO thisisafakeemail@hotmail.com IMMEDIATELY!!!!!!</p>,
      styles: { top: '410px', left: '80px' }
    },
    {
      title: 'ERROR: Aw Dang It',
      content: <p>Well, it's been an honor gentlemen...</p>,
      styles: { top: '220px', left: '580px' }
    }
  ]); 

  function createBlueScreen() {
    const delays = [100, 3500, 2800, 2000, 1200, 1000, 800, 600, 600, 1000]; // ms
  
    function triggerComponent(index) {
      if (index < delays.length) {
        setTimeout(() => {
          setErrorWindows(prevErrors => {
            if (prevErrors.length > 0) {
              const [nextWindow, ...remaining] = prevErrors;
  
              // Queue this one for rendering
              setActiveErrors(prev => [...prev, nextWindow]);
  
              // Return updated remaining windows
              return remaining;
            } else {
              // No more errors, trigger blue screen
              const screen = document.getElementsByClassName('blue-screen')[0];
              if (screen) screen.classList.add('active');
              return prevErrors;
            }
          });
  
          triggerComponent(index + 1);
        }, delays[index]);
      }
    }

    triggerComponent(0);
  }

  useEffect(() => {
    setIsLoaded(true);

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
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <main
      ref={frontRef}
      className={'app' + (isLoaded ? ' initialize' : '')}>
      <Window
        title="Summary"
        id="summary"
        content={
          <>
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
            <p><b>New Website! Under construction! Upcoming changes...</b></p>
            <ul>
              <li>Improved mobile experience!</li>
              <li>Expandable window sizes!</li>
              <li>Prettier Windows!</li>
              <li>Prettier Menu!</li>
              <li>Dark mode!</li>
            </ul>
          </>
        }
      />

      <Window
        title="About Me"
        id="about-me"
        hidden="true"
        content={
          <>
            <h2>About Me</h2>
            <p>
              Born in Germany and raised in the states, I am a web developer of 5 years experience
              with experience in the HTML, CSS, SASS/SCSS, JavaScript, jQuery, C#, and PHP languages to build and 
              maintain websites, as well as Drupal, Wordpress, .NET, and React as content management systems
              and development frameworks.
            </p>
            <p>
              Not only that, but I also have experience with various development tools from mySQL, 
              DDEV, Docker, ESLint, Webpack, Vite, Composer, NodeJS, and Storybook.
            </p>
            <p>
              Additionally, I have some experience with Python as well, which I used for software development,
              creating distributable software to automate excel-based filing and connecting to a number of RESTful
              APIs to retrieve data from a number of sources.
            </p>
            <p>
              My hobbies include board games and tabletop roleplaying games such as Dungeons & Dragons and the
              Warhammer 40k TTRPGs. Not only do I write lots of homebrew, but I even write my own systems 
              (<a href="https://mega.nz/file/uQo23ZoK#joD8bj81R55vksFhyCURfAgd8kI5LH69ykp_bAmbZYA" rel="noreferrer" target="_blank">
              Click here to check it out, if you're interested</a>)! I also enjoy playing video games and reading manga in my free time.
            </p>
            <img src={ Headshot } alt="A headshot of Noah Sekreter"/>
            <figcaption>A headshot of Noah Sekreter</figcaption>
            <p><a href="#totally-not-a-virus-bro-trust-me" onClick={ createBlueScreen }>Oh what have we here? A single link hidden away? How peculiar...</a></p>
          </>
        }
      />

      <Window
        title="Work Experience"
        id="work-experience"
        hidden="true"
        content={
          <>
            <h2>Work Experience</h2>
            <Position company="Sandstorm Design"
              title="Front-end web developer" dates="January 2022 - March 2025"
              content={
                <p>Developed numerous websites under an Agile environment, primarily focusing on 
                Drupal and Wordpress based-projects, with occasional front-end work in .NET 
                frameworks such as Sitecore or Sitefinity. Contributed to establishing and 
                improving front-end build tools utilising Webpack, Vite, and ESlint. 
                Performed maintenance on a variety of sites, addressing accessibility compliance, 
                security vulnerabilities, and site performance.</p>
              } />
            <Position company="BBG Inc."
              title="Account Manager / Software Developer" dates="March 2019 - June 2021"
              content={
                <p>Performed data entry and record keeping of several companies and their employees.
                Developed Python software to automate Excel-based medical censuses and integration
                to both the Smartsheets API and Healthcare.gov Marketplace API.</p>
              } />
            <Position company="Cleveland Hardware & Forging"
              title="Front-end Web Developer" dates="November 2017 - August 2019"
              content={
                <p>Updated and maintained the company website, rebuilding it from the ground up.</p>
              } />
          </>
        }
      />

      <Window
        title="Portfolio"
        id="portfolio"
        hidden="true"
        content={
          <>
            <h2>Portfolio</h2>
            <article>
              <h3>This Website! (2021, 2025)</h3>
              <p>My personal website, used for displaying the projects I have created as well as showing off any skills I have recently picked up. This site has been built utilizing React,
                and as of 2025 it has received a new site overhaul to show off the improvements I have made as a developer.</p>
              <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, React</b></p>
              <a href="https://github.com/NoahSekreter/NoahSekreter.github.io" className="button" rel="noreferrer" target="_blank" aria-label="Visit this website's GitHub repo">Github Page</a>
            </article>
            <article>
              <h3>MJHS (2024-2025)</h3>
              <p>Modernized a large portion of the site as part of a team-wide site refresh project, working primarily on homepage and mega-menu enhancements.</p>
              <p><b>Created Using: Wordpress, CSS, SASS, JavaScript, PHP, ACF, Figma</b></p>
              <a href="https://www.mjhs.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit MJHS website">Website</a>
            </article>
            <article>
              <h3>ASPPH (2025)</h3>
              <p>A more recent project that I was involved in, this is a Wordpress-based environemnt utilizing component-driven Agile-sprints for an updated Homepage</p>
              <p><b>Created Using: Wordpress, Timber/Twig, CSS, SCSS, JavaScript, PHP, ACF, Figma</b></p>
              <a href="https://aspph.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit ASPPH website">Website</a>
            </article>
            <article>
              <h3>UNICEF USA (2023-2024)</h3>
              <p>Part of a team handling continuous maintenance and improvement, I have handled various Drupal block updates and page hero enhancements</p>
              <p><b>Created Using: Drupal, Twig, CSS, SCSS, JavaScript, jQuery, PHP, YML, Layout Builder, Figma</b></p>
              <a href="https://unicefusa.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit UNICEF USA website">Website</a>
            </article>
            <article>
              <h3>CenFill (2019)</h3>
              <p>During my time at BBG, I have taught myself Python in order to automate the company's workflow. I have created a program, which I distributed among the company, that allows a user to automate filling out Excel spreadsheets. Over time, this program evolved to include <a href="https://smartsheet.redoc.ly/">Smartsheets API</a> and <a href="https://developer.cms.gov/marketplace-api/">Marketplace API</a> integration.</p>
              <p><b>Created Using: Python, Smartsheets API, Marketplace API</b></p>
              <a href="https://github.com/NoahSekreter/CenFill" className="button" rel="noreferrer" target="_blank"  aria-label="Visit the CenFill Github repo">Github Page</a>
            </article>
            <article>
              <h3>Cleveland Hardware & Forging (2018)</h3>
              <p>After attending WeCan{'{Code}'}It, I was brought on to Cleveland Hardware to rebuild their old website, including adding a PHP email form to submit quotes.</p>
              <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, PHP</b></p>
              <a href="https://clevelandhardware.com/" className="button">Website (No Longer Available)</a>
            </article>
          </>
        }
      />

      {activeErrors.map((item, i) => ( <Window key={i} title={item.title} content={item.content} styles={item.styles} /> ))}
    </main>
  );
}
