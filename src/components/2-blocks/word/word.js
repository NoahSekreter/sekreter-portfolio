import React from 'react';
import Headshot from './headshot-2025-compressed.JPG';
import './word.scss';

export default function Word() {
  return (
    <div className="word">
      <div className='word__doc'>
        <h2>About Me</h2>
        <p>
          Born in Germany and raised in the United States, I am a web developer of 5 years experience
          having worked in primarily the Cleveland and Chicago areas in Full-Stack web and software development.
        </p>
        <p>
          The programming languages I use in my projects include HTML,
          CSS, JavaScript, C#, PHP, Python, and SQL.
        </p>
        <p>
          For development tools and frameworks, I utilize SASS/SCSS, jQuery, Bootstrap, NodeJS,
          DDEV, Docker, RESTful APIs, ESLint, Webpack, Vite, Composer, Storybook,
          .NET, Drupal, WordPress, and React.
        </p>
        <p>
          Some fun facts about me:
        </p>
        <p>
          <ul>
            <li>I have an ACT score of 32 in STEM fields, placing me in the 97th percentile.</li>
            <li>I dabbled in 3D programming.</li>
            <li>I work with Windows, iOS, and Linux-based (Ubuntu, Mint, and Manjaro) operating systems.</li>
            <li>I speak entry-level German and a very small amount of Turkish.</li>
            <li>As a hobby of mine I play and create tabletop roleplaying games like Dungeons & Dragons or the Warhammer 40k TTRPG's.</li>
            <li>My favorite video games are Noita, Dwarf Fortress, and Metal Gear Rising.</li>
            <li>I have an interest in historical arms and armor and like to collect swords.</li>
          </ul>
        </p>
        <br />
        <img src={ Headshot } alt="A headshot of Noah Sekreter"/>
        <figcaption>A headshot of Noah Sekreter</figcaption>
      </div>
    </div>
  );
}