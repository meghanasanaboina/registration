import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { freeExamList } from "../Redux/Actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Freeexamlist = () => {



    const { LoginReducer, ExamListReducer } = useSelector(state => state)

    //console.log(state);
    const state2 = (LoginReducer.loginuser.data);

    //console.log(state2);

    const dispatch = useDispatch();

    const state1 = (ExamListReducer.examlistuser.data);
    useEffect(() => {
        dispatch(freeExamList({ state2 }))
    }, []);



    //console.log(state1);
   

    return (

        <>
            {state1 ?
              <>
                    <h2>PRATHIBHA UPSC CIVIL SERVICES APP</h2><p>3 Years  Prevoius Papers</p><h4>3 Years Old Question Paper Civil Services(Prelims)</h4><p>(0/3 Attempted)</p>
                <div style={{display:'flex'}} className="col-sm-6">
                    <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam.id}`}>
                    
                        <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                            <p style={{color:'white',padding:'30px'}}>{state1.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam.name}</p>
                            <p style={{color:'white',padding:'30px'}}>UPSC PRELIMS PAPER-1</p>
                        </div>
                    </Link>

                    <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[0]["Old question papers UPSC Civils (Pre)"][1].Exam.id}`}>
                    
                        <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 60px'}}>
                           <p style={{color:'white',padding:'30px'}}>{state1.exams[0]["Old question papers UPSC Civils (Pre)"][1].Exam.name}</p>
                            <p style={{color:'white',padding:'30px'}}>UPSC PRELIMS PAPER-1</p>
                        </div>
                    </Link>

                    <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[0]["Old question papers UPSC Civils (Pre)"][2].Exam.id}`}>
                    
                        <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 60px'}}>
                             <p style={{color:'white',padding:'30px'}}>{state1.exams[0]["Old question papers UPSC Civils (Pre)"][2].Exam.name}</p>
                            <p style={{color:'white',padding:'30px'}}>UPSC PRELIMS PAPER-1</p>
                        </div>
                    </Link>
                </div>
                <p>(Limited UPSC other than Civils)</p><p>(0/10 Attempted)</p>
                <div style={{display:'flex'}} className="col-sm-6">
                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][0].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                       <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][0].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][1].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                       <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][1].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>


                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][2].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                       <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][2].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                </div>

              <div style={{display:'flex'}} className="col-sm-6">
                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][3].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                      <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][3].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][4].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                         <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][4].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][5].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][5].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>
              </div>
               
              <div style={{display:'flex'}} className="col-sm-6">
                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][6].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][6].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][7].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][7].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][8].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 60px 20px 100px'}}>
                       <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][8].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>
              </div>
              <div style={{display:'flex'}} className="col-sm-6">
                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[1]["Limited UPSC other than Civils"][9].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'40px 40px 20px 555px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[1]["Limited UPSC other than Civils"][9].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited UPSC</p>
                    </div>
                </Link>

                

               
              </div>
              <p>(Limited NCERT)</p><p>(0/4 Attempted)</p>
              <div  style={{display:'flex'}} className="col-sm-9">
              <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[2]["Limited NCERT"][0].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'20px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[2]["Limited NCERT"][0].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited NCERT</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[2]["Limited NCERT"][1].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'20px'}}>
                       <p style={{color:'white',padding:'30px'}}>{state1.exams[2]["Limited NCERT"][1].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited NCERT</p>
                    </div>
                </Link>

                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[2]["Limited NCERT"][2].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'20px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[2]["Limited NCERT"][2].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited NCERT</p>
                    </div>
                </Link>
                
                <Link style={{textDecoration:'none'}} to={`/Freeexamlist/${state1.exams[2]["Limited NCERT"][3].Exam.id}`}>
                    
                    <div className="card " style={{backgroundColor:'black',width:'300px',margin:'20px'}}>
                        <p style={{color:'white',padding:'30px'}}>{state1.exams[2]["Limited NCERT"][3].Exam.name}</p>
                        <p style={{color:'white',padding:'30px'}}>Limited NCERT</p>
                    </div>
                </Link>
                </div>      

                </>
                : 'loading...'
            }

        </>
    )
}
export default Freeexamlist;