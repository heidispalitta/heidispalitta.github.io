import React from 'react';

const Projects = () => {
    return (
        <section id="Projects" className="projects-section">
            <h1>Projects</h1>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Gamification in Educational Interfaces (Senior Thesis)
                <span style={{paddingRight: '5vw'}}>09/24 - 07/25</span>
            </h3>
            <ul>
                <li><h4>I am conducted a study on the implementation of gamification within digital educational platforms, specifically focusing on learning management systems in higher education.</h4></li>
                <li><h4>This study aimed to explore the potential intersection between gamification in higher education and a trend towards hyper-credentialism, where credentials/awards are increasingly prioritized over actual learning.</h4></li>
                <li><h4>Findings informed the development of a technology prototype.</h4></li>
                <li><h4>Advised by Professor Bilge Mutlu and Hailey Johnson.</h4></li>
            </ul>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Gamified Budgeting App 
                <span style={{paddingRight: '5vw'}}>08/23 - 08/24</span>
            </h3>
            <ul>
                <li><h4>Developed an iOS budgeting app for use in a co-design study as a part of my work on the Assistive Technology for Adults with Down Syndrome Project.</h4></li>
            </ul>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Head-Controlled Assistive Mouse 
                <span style={{paddingRight: '5vw'}}>09/21 - 12/21</span>
            </h3>
            <ul>
                <li>
                    <h4>Collaborated with a team of undergraduate engineers to design and develop an assistive system
                    enabling individuals with stroke-related paralysis to play video games on a PC.</h4>
                </li>
                <li>
                    <h4>Programmed an Arduino-based headpiece to translate head movements into precise mouse and
                    keyboard controls.</h4>
                </li>
                <li>
                    <h4>Co-presented the project at an undergraduate symposium.</h4>
                </li>
            </ul>
        </section>
    );
}

export default Projects;