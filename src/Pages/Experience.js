import React from 'react';

const Experience = () => {
    return (
        <section id="AboutMe" className="content-section-main">
            <h1>Experience</h1>

            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', boxSizing: 'border-box'}}>
                Univeristy of Wisonsin-Madison
                <span >08/25 - Current</span>
            </h3>
            <h4>
                CS570 and CS571
            </h4>
            <h4>
                <i>Teaching Assistant</i>
            </h4>

            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', boxSizing: 'border-box'}}>
                People and Robots Lab
                <span>02/23 - 07/25</span>
            </h3>
            <h4>
                Assistive Technology for Adults with Down Syndrome Project
            </h4>
            <h4>
                <i>Undergraduate Research Assistant</i>
            </h4>

            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '80vw', boxSizing: 'border-box'}}>
                UW-Madison Division of Information Technology
                <span>08/21 - 07/23</span>
            </h3>
            <h4>
                Productivity and Collaboration Services Team
            </h4>
            <h4>
                <i>Student Support Staff</i>
            </h4>
        </section>
    );
}

export default Experience;