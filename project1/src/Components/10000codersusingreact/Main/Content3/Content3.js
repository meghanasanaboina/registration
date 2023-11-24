import React, { Component } from 'react';
 
export default class Content3 extends Component{

    render(){
        return(
            <React.Fragment>
                <section style={{display:'flex',textAlign:'center',backgroundColor:'white',margin:'30px 50px 30px 90px'}}>
                    <section style={{maxWidth:'1140px'}}>
                        <h2 style={{fontSize:'28px',color:'black',fontWeight:'900',textAlign:'center !important',marginBottom:'60px',textTransform:'capitalize'}}>Presented By...Yours Truly, Anil Kumar Ghorakavi</h2>
                        <section style={{textAlign:'left',justifyContent:'center !important'}}>
                            <section style={{textAlign:'left',display:'flex',justifyContent:'center !important'}}>
                                <section style={{display:'flex',textAlign:'left',flex:'0 0 100%',maxWidth:'100%'}}>
                                    <section style={{display:'flex',textAlign:'left',marginBottom:'48px'}}>
                                        <section style={{display:'flex',flex:'0 0 25%',maxWidth:'25%'}}>
                                            <img src="https://www.10000coders.co/assets/Anil.webp" style={{width:'230px',height:'230px'}} alt="anil"></img>                                          
                                        </section>
                                        <section style={{flex:'0 0 75%',maxWidth:'75%'}}>
                                            <section style={{padding:'20px',textAlign:'left',color:'blue',fontSize:'18px',fontWeight:'700',marginBottom:'18px'}}>
                                                "Anil Kumar Ghorakavi"
                                                <br></br>
                                                <span style={{display:'block',fontSize:'16px',marginTop:'8px',color:'black'}}>Founder Of Engrip</span>

                                            </section>
                                            <section style={{color:'black',lineHeight:'30px'}}>
                                            As an entrepreneur who's constantly finding ways to help people reach greater heights in their career and an Ex-Oracle & Amazon guy, I know EXACTLY what it takes to launch a career in the IT industry. The truth is your background or your degrees don't matter! What matters is your skills, only your skills!

                                            </section>
                                        </section>

                                    </section>

                                </section>

                            </section>
                            <section style={{flex:'0 0 100%',maxWidth:'100%'}}>
                                <section style={{fontSize:'18px',fontWeight:'700',lineHeight:'30px',color:'black',textAlign:'center'}}>
                                " After visiting 25 colleges, interacting with almost 18000 students and 165 companies, Anil Kumar Ghorakavi is on a mission to bridge the awareness gap that exists between students and employees. His start-up has successfully placed 1150+ students and has partnered with more than 100+ well-known companies within 3 years. "
                                </section>
                            </section>

                        </section>
                    </section>

                </section>
            </React.Fragment>
        )
    }
}