import React from 'react';

const Education = () => {
    return (
        <section id="AboutMe" className="content-section-main">
            <h1>Education</h1>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                UW-Madison
                <span style={{paddingRight: '5vw'}}>09/21 - 05/25</span>
            </h3>
            <h4>
                B.S. with double major in Computer Science and Anthropology
            </h4>
        </section>
    );
}

export default Education;