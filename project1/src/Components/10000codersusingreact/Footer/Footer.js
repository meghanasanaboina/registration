import React, { Component } from 'react';
 
export default class Footer extends Component{

    render(){
        return(
            <React.Fragment>
                <footer style={{backgroundColor:'darkslategray',padding:'32px 64px',display:'flex',flexDirection:'row',flexWrap:'wrap',fontWeight:'700'}}>
                    <section style={{flex:'1 0 100%',color:'white',textAlign:'center'}}>
                    +91 9618275587 © 10000coders 2022 | All rights reserved

                    </section>

                </footer>
            </React.Fragment>
        )
    }
}