import React from 'react';
import './about.styles.css'
function AboutPage(){
    return(
        <div className='about-container'>
            <header className='about-header'>
                <h1>About us</h1>
                <span>The absolute best</span>
            </header>

            <div className="about-content">
                <h2>Who We Are</h2>
            </div>
        </div>
    )
}

export default AboutPage;