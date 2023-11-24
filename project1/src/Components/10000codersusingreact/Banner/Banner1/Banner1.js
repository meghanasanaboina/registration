import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Savemyseat from './Savemyseat';

const styling = {
    pStyling:{
        marginLeft:'50px',
        marginTop:'20px',
        marginBottom:'30px',
        fontSize:'20px',
        fontWeight:'500',
        width:'600px',
    },
    h1Styling:{
        marginLeft:'50px',
        marginBottom:'20px',
        fontSize:'1.875rem',
        fontWeight:'700',
        letterSpacing:'2px',
        color:'black',
        width:'600px',
        fontFamily:''
    },
    p1Styling:{
        marginLeft:'50px',
        marginTop:'20px',
        marginBottom:'30px',
        fontSize:'20px',
        fontWeight:'100',
        width:'600px',
    },
    btnStyling:{
        marginLeft:'50px',
        height:'50px',
        backgroundColor:'whitesmoke',
        color:'white',
        border:'none',
        borderRadius:'5px',
        boxColor:'orange',
        fontSize:'30px',
        fontWeight:'200',
        boxShadow:'5px'


    },
} 
export default class Banner extends Component {
    render(){
        return(
            <section style={{flex:'50%'}}>
                <p style={styling.pStyling}>Free 3-day online boot camp for B.Tech Graduates who are struggling to find a high paying IT job</p>
                <h1 style={styling.h1Styling}>HOW TO GET A WELL-PAID TECH JOB EVEN IF YOU’VE NEVER WRITTEN CODE BEFORE</h1>
                <p style={styling.p1Styling}>Discover everything you need to do to land an IT job that pays you an average salary of 5 Lakh per annum in the software industry. All you need to do is spend 90 minutes for 3 days with us. And you will be on the right track to securing a lucrative software job. For completely FREE!</p>
                <button style={styling.btnStyling}><Link to="/Savemyseat" style={{textDecoration:'none',color:'white',backgroundColor:'whitesmoke'}}></Link></button><br></br>
                <Savemyseat /><br></br>
                <span style={styling.p1Styling}>I’m ready to level up my skills</span>
                
            </section>
        )
    }
}