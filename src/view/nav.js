import { Fragment } from 'react';

function Nav() {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li id="nav-main" className="active"><a href="#title">MAIN</a></li>
                    <li id="nav-about"><a href="#about">ABOUT</a></li>
                    <li id="nav-projects"><a href="#projects">PROJECTS</a></li>
                    {/* <li><a href="#contact">CONTACT</a></li> */}
                </ul>
            </nav>
        </Fragment>
    )
}

export default Nav
