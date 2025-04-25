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
              <div className='h3'>Web Developer</div>
            </div>
            <Scroller />
            <div className='window__links'>
              <a rel="noreferrer" href={ Resume } target='_blank'>View Resume</a>
              <a rel="noreferrer" href="https://github.com/NoahSekreter" target='_blank'>View GitHub</a>
              <a rel="noreferrer" href="https://www.linkedin.com/in/sekreter" target='_blank'>View LinkedIn</a>
            </div>
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

    </main>
  );
}
