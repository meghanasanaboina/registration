import React, { Component } from 'react';
 
export default class Content6 extends Component{

    render(){
        return(
            <React.Fragment>
                <section style={{backgroundColor:'white',fontSize:'18px',textAlign:'center',marginLeft:'130px'}}>
                    <section style={{maxWidth:'1140px'}}>
                        <h1 style={{fontWeight:'700',marginBottom:'32px'}}>
                        WHO SHOULDN'T ATTEND?
                        </h1>
                        <h2 style={{fontWeight:'700',marginBottom:'32px',textTransform:'capitalize'}}>This Boot Camp Will Not Be Right For You If</h2>
                        <section style={{justifyContent:'center'}}>
                            <ul style={{listStyle:'none',paddingLeft:'300px',marginBottom:'32px'}}>
                                <li style={{textAlign:'center',backgroundColor:'lightsalmon',maxWidth:'max-content',display:'list-item',fontSize:'20px'}}>
                                    <img src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/Cancel-512.png" width="30px" height="25px" alt="right"></img>
                                    Think a degree is all you need to get a software job
                                </li>
                                <br></br>
                                <li style={{textAlign:'center',backgroundColor:'lightsalmon',maxWidth:'max-content',display:'list-item',fontSize:'20px'}}>
                                    <img src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/Cancel-512.png" width="30px" height="25px" alt="right"></img>
                                    You’re okay with getting a data entry, SEO, or digital marketing job
                                </li>
                                <br></br>
                                <li style={{textAlign:'center',backgroundColor:'lightsalmon',maxWidth:'max-content',display:'list-item',fontSize:'20px'}}>
                                    <img src="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/Cancel-512.png" width="30px" height="25px" alt="right"></img>
                                    Don’t have the grit and determination to commit time for a successful career
                                </li>
                        

                            </ul>

                        </section>
                    </section>

                </section>
            </React.Fragment>
        )
    }
}