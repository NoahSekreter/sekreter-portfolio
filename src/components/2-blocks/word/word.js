import React from 'react';
import Headshot from './headshot-2025-compressed.JPG';
import './word.scss';

export default function Word() {
  return (
    <div className="word">
      <div className='word__doc'>
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
        </p><br />
        <img src={ Headshot } alt="A headshot of Noah Sekreter"/>
        <figcaption>A headshot of Noah Sekreter</figcaption>
      </div>
    </div>
  );
}