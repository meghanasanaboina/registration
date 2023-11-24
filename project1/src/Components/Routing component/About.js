import React from 'react';

function About(){
    return(
        <div>
            <br></br>
            <h1>About:</h1>
            <br></br>

            <div style={{color:'black'}}>
                <h1 >Getting Started</h1>
                <br></br>
                <br></br>
                <h4 >This page is an overview of the React documentation and related resources.</h4>
                <br></br>
                <p><b>React</b> is a JavaScript library for building user interfaces. Learn what React is all about on our <u style={{cursor:'pointer'}}>homepage </u>or <u style={{cursor:'pointer'}}>in the tutorial.</u></p>

                <ul style={{listStyleType:'pointer'}}>
                    <li style={{cursor:'pointer',color:'black'}}>Try React</li>
                    <li style={{cursor:'pointer',color:'black'}}>Learn React</li>
                    <li style={{cursor:'pointer',color:'black'}}>Staying Informed</li>
                    <li style={{cursor:'pointer',color:'black'}}>Versioned Documentation</li>
                    <li style={{cursor:'pointer',color:'black'}}>Something Missing?</li>
                </ul>
            </div>
        </div>
    )
}

export default About