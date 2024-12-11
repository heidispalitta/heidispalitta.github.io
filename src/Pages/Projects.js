import React from 'react';

const Projects = () => {
    return (
        <section id="Projects" className="projects-section">
            <h1>Projects</h1>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Gamification in Educational Interfaces (Senior Thesis)
                <span style={{paddingRight: '5vw'}}>09/24 - Current</span>
            </h3>
            <ul>
                <li><h4>I am conducting a study on the implementation of gamification within digital educational platforms, specifically focusing on learning management systems in higher education.</h4></li>
                <li><h4>This study aims to explore the potential intersection between gamification in higher education and a trend towards hyper-credentialism, where credentials/awards are increasingly prioritized over actual learning.</h4></li>
                <li><h4>Findings will inform the development of a technology prototype in the second semester.</h4></li>
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
                Reddit and Mental Health in Romania
                <span style={{paddingRight: '5vw'}}>01/24 - 05/24</span>
            </h3>
            <ul>
                <li><h4>Conducted an ethnographic investigation of mental healthcare seeking behaviors in Romanian
                Reddit spaces.</h4></li>
                <li><h4>Completed an academic paper as a part of coursework.</h4></li>
            </ul>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Online Discourse Towards Political Art
                <span style={{paddingRight: '5vw'}}>01/24 - 05/24</span>
            </h3>
            <ul>
                <li><h4>Conducted a qualitative analysis of chatrooms, blogs, and Reddit posts regarding a contemporary controversial art exhibit in Bucharest, Romania.</h4></li>
                <li><h4>Completed an academic paper as a part of coursework.</h4></li>
            </ul>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Competition and Commonality in College
                <span style={{paddingRight: '5vw'}}>09/23 - 12/23</span>
            </h3>
            <ul>
                <li><h4>Investigated through a case-study how college students use an attitude of disregard for academics as a method of
                finding common ground with each other, perpetuating anti-intellectual sentiment.</h4></li>
                <li><h4>Completed an academic paper as a part of coursework.</h4></li>
            </ul>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                Grade Calculator App
                <span style={{paddingRight: '5vw'}}>09/22 - 01/23</span>
            </h3>
            <ul>
                <li><h4>Developed a custom iOS app to track and calculate course grades, addressing the limitations of
                existing tools by accommodating unique grading schemes for unique.</h4></li>
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