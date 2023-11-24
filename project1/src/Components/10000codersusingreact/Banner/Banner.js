import React, { Component } from 'react';
import Banner1 from './Banner1/Banner1';
import Banner2 from './Banner2/Banner2';


export default class Banner extends Component {
    render(){
        return(
            <React.Fragment  >
               <section style={{display:'flex',backgroundColor:'whitesmoke'}}> 
                 <Banner1 />
                 <Banner2 /> 
                </section>
            </React.Fragment>
        )
    }
}