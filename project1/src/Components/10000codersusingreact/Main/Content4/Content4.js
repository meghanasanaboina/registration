import React, { Component } from 'react';
 
export default class Content4 extends Component{

    render(){
        return(
            <React.Fragment>
                <section style={{textAlign:'center'}}>
                    <section style={{textAlign:'center',maxWidth:'1330px'}}>
                        <h2 style={{fontSize:'28px',color:'black',fontWeight:'900',textAlign:'center',backgroundColor:'whitesmoke',textTransform:'capitalize',marginBottom:'0px'}}>What They're Saying</h2>
                        <section style={{display:'flex',flexWrap:'wrap',marginRight:'-15px',marginLeft:'-15px',backgroundColor:'whitesmoke',textAlign:'center'}}>
                            <p style={{fontSize:'20px',width:'680px',marginTop:'90px',textAlign:'center',marginLeft:'auto',marginRight:'auto'}}>This is a very nice opportunity for all the people who are looking for a job. Thank you for this opportunity.</p>
                            <br></br>
                        </section>
                        <section style={{display:'flex',flexWrap:'wrap',marginRight:'-15px',marginLeft:'-15px',backgroundColor:'whitesmoke',textAlign:'center'}}>
                            <p style={{fontSize:'20px',width:'200px',height:'100px',textAlign:'center',marginLeft:'auto',marginRight:'auto'}}>Jyothi</p>

                        </section>

                    </section>

                </section>
            </React.Fragment>
        )
    }
}