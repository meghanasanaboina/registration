import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
            <header style={{backgroundColor:'black',color:'white',display:'flex'}}>
                <div style={{flex:'1'}}>
                    <img src="https://www.10000coders.co/assets/10000coders-logo.png?v=1.0" alt="1000coders"></img>

                </div>
                <nav style={{flex:'11'}}>
                    <ul style={{display:'flex',listStyleType:'none',cursor:'pointer'}}>
                        <li style={{flex:'1'}}><Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></li>
                        <li style={{flex:'1'}}><Link to="/about" style={{textDecoration:'none',color:'white'}}>About</Link></li>
                        <li style={{flex:'1'}}><Link to="/contact" style={{textDecoration:'none',color:'white'}}>Contact</Link></li>
                        <li style={{flex:'1'}}><Link to="/placements" style={{textDecoration:'none',color:'white'}}>Placements</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
