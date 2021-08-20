import { Fragment } from 'react';

// Import assets
import ResumePDF from '../assets/Sekreter Resume 2021.pdf';
import ResumeDOC from '../assets/Sekreter Resume 2021.DOCX';
import Headshot from '../assets/headshot.jpg';

// Set up the main body of the page
function Main() {
    return (
        <Fragment>
            {/* Title card & particle ground */}
            <section id="title">
                <div className="titlebox">
                    <h1>NOAH SEKRETER</h1>
                    <h2>WEB & SOFTWARE DEVELOPER</h2>
                    <div id="scroller">
                        <span>HTML5, CSS, SASS/SCSS, Bootstrap, JavaScript, jQuery, React, PHP, C#, MVC, ASP.NET, mySQL, Python -&nbsp;</span>
                    </div>
                    <a href="#about" className="button" style={{ marginRight: 10 }}>ABOUT</a>
                    <a href={ResumePDF} className="button">RESUME</a>
                </div>
            </section>

            {/* About me, listing summary and job experience */}
            <section id="about">
                <div className="section-banner">
                    <h2>ABOUT</h2>
                </div>
                <div className="summary">
                    <div className="summary-text">
                        <p>German born and living in America for nearly 20 years, I began my programming career as an intern at Stream-9, a Cleveland-based website development company.
                            After my time at Stream-9 I have attented a 6 month intensive coding bootcamp called WeCan{'{Code}'}It, where I learned full-stack development and the ASP.NET framework.
                            Throughout my career, I have self-taught various languages to improve my skills as a developer and slowly master the artform that is programming.<br />
                            I am currently looking for a web / software development position in the Chicago area.
                            If you would like to contact me the best way to do so is through email at <a href="mailto:nsekreter@gmail.com">nsekreter@gmail.com</a>.</p>
                        <div className="button-row">
                            <div className="col">
                                <a className="button" href="https://github.com/NoahSekreter">Github</a>
                                <a className="button" href="https://www.linkedin.com/in/sekreter/">LinkedIn</a>
                            </div>
                            <div className="col">
                                <a className="button" href={ResumePDF} download='Sekreter Resume 2021'>Resume (PDF)</a>
                                <a className="button" href={ResumeDOC} download='Sekreter Resume 2021'>Resume (Word)</a>
                            </div>
                        </div>
                        <article>
                            <h3>Front-End Development</h3>
                            <p>My web development skills include HTML5, CSS & SCSS, Bootstrap, JavaScript, and jQuery. Recently, I have been self teaching myself React as well.</p>
                        </article>
                        <article>
                            <h3>Back-End Development</h3>
                            <p>My primary back-end skills include C# via ASP.NET and PHP, briefly working with mySQL for database management.</p>
                        </article>
                        <article>
                            <h3>Software Development</h3>
                            <p>I have independently taught myself Python in order to develop automation software for BBG Inc. This software created and modified Excel spreadsheets to automate the census filling process.</p>
                        </article>
                    </div>
                    <div className="summary-image">
                        <img src={Headshot} alt="" /><br />
                    </div>
                </div>
            </section>

            {/* Project list */}
            <section id="projects">
                <div className="section-banner">
                    <h2>PROJECTS</h2>
                </div>
                <div id="carousel">
                    <article>
                        <div className="background banner-1"></div>
                        <div className="text">
                            <h3>This Website (2021)</h3>
                            <p>My personal website, used for displaying the projects I have created as well as showing off any skills I have recently picked up. As of August 2021, this site has been rebuilt utilizing React.</p>
                            <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, React</b></p><br />
                            <a href="https://github.com/NoahSekreter/NoahSekreter.github.io" className="button">Github Page</a>
                        </div>
                    </article>
                    <article>
                        <div className="background banner-2"></div>
                        <div className="text">
                            <h3>CenFill (2019)</h3>
                            <p>During my time at BBG, I have taught myself Python in order to automate the company's workflow. I have created a program, which I distributed among the company, that allows a user to automate filling out Excel spreadsheets. Over time, this program evolved to include <a href="https://smartsheet.redoc.ly/">Smartsheets API</a> and <a href="https://developer.cms.gov/marketplace-api/">Marketplace API</a> integration.</p>
                            <p><b>Created Using: Python, Smartsheets API, Marketplace API</b></p><br />
                            <a href="https://github.com/NoahSekreter/CenFill" className="button">Github Page</a>
                        </div>
                    </article>
                    <article>
                        <div className="background banner-3"></div>
                        <div className="text">
                            <h3>Cleveland Hardware & Forging (2018)</h3>
                            <p>After attending WeCan{'{Code}'}It, I was brought on to Cleveland Hardware to rebuild their old website, including adding a PHP email form to submit quotes.</p>
                            <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, PHP</b></p><br />
                            <a href="https://clevelandhardware.com/" className="button">Website</a>
                        </div>
                    </article>
                </div>
            </section>
        </Fragment>
    )
}

export default Main

// // Old code, may add back later 
// Contact info and resume
// <section id="contact">
//     <div className="section-banner">
//         <h2>CONTACT ME</h2>
//     </div>
//     <div className="contact-content">
//         <p>The most effective way to contact me is through email at <a href="mailto:nsekreter@gmail.com">nsekreter@gmail.com</a>.</p>

//         <h3>Additional Sites</h3>
//         <span><a className="button" href="https://github.com/NoahSekreter">Github</a></span>
//         <span><a className="button" href="https://www.linkedin.com/in/sekreter/">LinkedIn</a></span>

//         <h3>Resume</h3>
//         <span><a className="button" href={ResumePDF} download='Sekreter Resume 2021'>Resume (PDF)</a></span>
//         <span><a className="button" href={ResumeDOC} download='Sekreter Resume 2021'>Resume (Word)</a></span>
//     </div>
// </section>
