import React, { useState, useEffect, useRef } from 'react';
import './email-canvas.scss';
import Position from '../../1-elements/position/position.js';

export default function EmailCanvas({ inheritFunc }) {
  const emailRef = useRef(null);
  const [activeEmail, setActiveEmail] = useState(null);
  const emailContent = [
    {
      id: 0,
      company: "Sandstorm Design",
      title:"Front-end web developer",
      dates: "January 2022 - March 2025",
      content: (
        <>
        <p>Developed numerous websites under an Agile environment, focusing on 
          Drupal and Wordpress based-projects, with occasional front-end work in .NET 
          frameworks such as Sitecore or Sitefinity. Contributed to establishing and improving
          front-end build tools utilizing Webpack, Vite, ESlint, & Storybook, building designs
          from Figma. Established local environments with DDEV & Docker.</p>
        <p>Performed maintenance on a variety of sites, addressing accessibility compliance, 
          security vulnerabilities, and site performance.</p>
        </>
      )
    },
    {
      id: 1,
      company: "BBG Inc.",
      title:"Account Manager / Software Developer",
      dates: "March 2019 - June 2021",
      content: (
        <>
          <p>Performed data entry and record keeping of several companies and their employees.
          Developed Python software to automate Excel-based medical censuses and integration
          to both the Smartsheets API and Healthcare.gov Marketplace API, followed by employee
          training and establishing software updating.</p>
        </>
      )
    },
    {
      id: 2,
      company: "Cleveland Hardware & Forging",
      title:"Web Developer",
      dates: "November 2017 - August 2019",
      content: (
        <p>Updated and maintained the company website, rebuilding it from the ground up. Managed record keeping in an ERP system.</p>
      )
    },
    {
      id: 3,
      company: "We Can Code It",
      title:"Student",
      dates: "March 2017 - August 2017",
      content: (
        <>
          <p>Took part in an intensive 12-week, full time training course for web development. Hands on
          development of various .NET projects under aggressive deadlines.</p>
          <p>Proven experience in HTML5, CSS, JavaScript, C#, MVC, and ASP.NET technologies to acquire a Certificate of Software Engineering.</p>
        </>
      )
    },
    {
      id: 4,
      company: "Stream 9",
      title:"Intern",
      dates: "February 2017 - March 2017",
      content: (
        <p>Studied the web development process under the tutelage of the senior developers working there.</p>
      )
    },
    {
      id: 5,
      company: "Congradulations!!!!!",
      title:"YOU WIN!!!!",
      dates: "",
      content: (
        <>
          <p>Congradulations! You have won the ACME super signup lottery! A $1000 gift card awaits you!</p>
          <p>This is NOT a scam! Better hurry, this offer expires in 24 hours!!</p>
          <p><button className='easter-egg' onClick={ inheritFunc }>Click here to acquire your totally legitimate prize!!!</button></p>
        </>
      )
    },
  ];

  useEffect(() => {
    const summaries = emailRef.current.querySelectorAll('.position__summary');

    setActiveEmail([
      emailContent[0].title,
      emailContent[0].company,
      emailContent[0].dates,
      emailContent[0].content
    ]);

    const firstPosition = document.querySelectorAll('.position')[0];
    firstPosition.setAttribute('open', true);
    firstPosition.classList.add('read');

    const handleClick = (e) => {
      e.preventDefault();
      const detailID = e.target.id;

      const allDetails = document.querySelectorAll('.position');
      allDetails.forEach((detail) => detail.removeAttribute('open'));

      const clickedDetail = e.target.closest('details');
      if (clickedDetail) {
        clickedDetail.setAttribute('open', true);
        clickedDetail.classList.add('read');
      }

      if (detailID) { setActiveEmail([
        emailContent[detailID].title,
        emailContent[detailID].company,
        emailContent[detailID].dates,
        emailContent[detailID].content  
      ]); }
    };

    // Attach listeners
    summaries.forEach((summary) => {
      summary.addEventListener('click', handleClick);
    });

    // Cleanup on unmount
    return () => {
      summaries.forEach((summary) => {
        summary.removeEventListener('click', handleClick);
      });
    };  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='email-canvas' ref={emailRef}>
      <div className="email-canvas__full-width">
        <h2>Work Experience</h2>
      </div>
      <div className="email-canvas__full-width">
        <span>Messages 1-6 of 6</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
      </div>
      <div className='email-canvas__emails'>
        {emailContent.map(email => (
          <Position key={email.id} company={ email.company } id={ email.id }
            title={ email.title } dates={ email.dates }
            content={ email.content } />
        ))}
      </div>
      <section className='email-canvas__canvas'>
        { activeEmail !== null &&
          <>
            <span className='company'>{ activeEmail[1] }</span>
            <span className='dates'>{ activeEmail[2] }</span>
            <span className='title'>Subject: { activeEmail[0] }</span>
            { activeEmail[3] }
          </>
        }
      </section>
    </div>
  )
}
