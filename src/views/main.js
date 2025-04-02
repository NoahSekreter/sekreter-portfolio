import { Fragment } from 'react';

// Import assets
import ResumePDF from '../assets/SekreterResume2025.pdf';
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
                        <span>HTML5, Twig/Timber, CSS, SASS/SCSS, Bootstrap, JavaScript, jQuery, React, PHP, Drupal, Wordpress, mySQL, Python, Storybook, Webpack, Vite, ESLint, Agile SCRUM, C#, MVC, ASP.NET -&nbsp;</span>
                    </div>
                    <a href="#about" className="button" style={{ marginRight: 10 }}>ABOUT</a>
                    <a href={ResumePDF} className="button" rel="noreferrer" target="_blank">RESUME</a>
                </div>
            </section>

            {/* About me, listing summary and job experience */}
            <section id="about">
                <div className="section-banner">
                    <h2>ABOUT</h2>
                </div>
                <div className="summary">
                    <div className="summary-text">
                        <p><strong>Current Career Status:</strong> Available for employment, looking for a Web Developer position in the Chicago area.</p>
                        <p>German born and living in America for nearly 20 years, I began my programming career as an intern at Stream-9, a Cleveland-based website development company.
                            After my time at Stream-9 I have attented a 6 month intensive coding bootcamp called WeCan{'{Code}'}It, where I learned full-stack development and the ASP.NET framework.
                            Afterwards, I have spent a period of time in data-entry, followed by self-teaching Python in order to automate my workflow and distributing my program within the company
                            to improve overall company performance. When I was finished with that, I have moved back into the world of Web Development to join the website agency of Sandstorm Design,
                            located in the Chicago area. From here, I have worked under Drupal, Wordpress, and a few .NET CMS frameworks, developing under an Agile scrum environemnt.<br />
                            If you would like to contact me the best way to do so is through email at <a href="mailto:nsekreter@gmail.com">nsekreter@gmail.com</a>.</p>
                        <div className="button-row">
                            <div className="col">
                                <a className="button" rel="noreferrer" target="_blank" href="https://github.com/NoahSekreter">Github</a>
                                <a className="button" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sekreter/">LinkedIn</a>
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
                        <img src={Headshot} alt="A headshot of Noah Sekreter, who is in casual business attire with long hair and glasses" /><br />
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
                            <h3>ASPPH (2021, 2025)</h3>
                            <p>A more recent project that I was involved in, this is a Wordpress-based environemnt utilizing component-driven Agile-sprints for an updated Homepage</p>
                            <p><b>Created Using: Wordpress, Timber/Twig, CSS, SCSS/SASS, JavaScript, PHP, ACF</b></p><br />
                            <a href="https://aspph.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit ASPPH website">Website</a>
                        </div>
                    </article>
                    <article>
                        <div className="background banner-1"></div>
                        <div className="text">
                            <h3>UNICEF USA (2023-2024)</h3>
                            <p>Part of a team handling continuous maintenance and improvement, I have handled various Drupal block updates and page hero enhancements</p>
                            <p><b>Created Using: Drupal, Twig, CSS, SCSS/SASS, JavaScript, jQuery, PHP, YML, Layout Builder</b></p><br />
                            <a href="https://unicefusa.org/" className="button" rel="noreferrer" target="_blank" aria-label="Visit UNICEF USA website">Website</a>
                        </div>
                    </article>
                    <article>
                        <div className="background banner-1"></div>
                        <div className="text">
                            <h3>This Website (2021)</h3>
                            <p>My personal website, used for displaying the projects I have created as well as showing off any skills I have recently picked up. As of August 2021, this site has been built utilizing React.</p>
                            <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, React</b></p><br />
                            <a href="https://github.com/NoahSekreter/NoahSekreter.github.io" className="button" rel="noreferrer" target="_blank"  aria-label="Visit this website's GitHub repo">Github Page</a>
                        </div>
                    </article>
                    <article>
                        <div className="background banner-2"></div>
                        <div className="text">
                            <h3>CenFill (2019)</h3>
                            <p>During my time at BBG, I have taught myself Python in order to automate the company's workflow. I have created a program, which I distributed among the company, that allows a user to automate filling out Excel spreadsheets. Over time, this program evolved to include <a href="https://smartsheet.redoc.ly/">Smartsheets API</a> and <a href="https://developer.cms.gov/marketplace-api/">Marketplace API</a> integration.</p>
                            <p><b>Created Using: Python, Smartsheets API, Marketplace API</b></p><br />
                            <a href="https://github.com/NoahSekreter/CenFill" className="button" rel="noreferrer" target="_blank"  aria-label="Visit the CenFill Github repo">Github Page</a>
                        </div>
                    </article>
                    <article>
                        <div className="background banner-3"></div>
                        <div className="text">
                            <h3>Cleveland Hardware & Forging (2018)</h3>
                            <p>After attending WeCan{'{Code}'}It, I was brought on to Cleveland Hardware to rebuild their old website, including adding a PHP email form to submit quotes.</p>
                            <p><b>Created Using: HTML, CSS, SCSS, JavaScript, jQuery, PHP</b></p><br />
                            <a href="https://clevelandhardware.com/" className="button">Website (No Longer Available)</a>
                        </div>
                    </article>
                </div>
            </section>
        </Fragment>
    )
}

export default Main
