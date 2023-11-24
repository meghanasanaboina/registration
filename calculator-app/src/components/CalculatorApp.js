import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loadAns, loadBackspace, loadButtons, loadClear } from '../redux/calculatorRedux/calculator.action';
import { CALCULATOR_KEY } from '../redux/calculatorRedux/calculator.reducer';


const CalculatorApp = () => {

    const dispatch = useDispatch();

    

    const viewCalculator = useSelector((state) => {
        return state[CALCULATOR_KEY]
    })
    return (
        <React.Fragment>
        

        <section>
            <div >
                <div >
                    <p style={{width:'100%',font:'bold',fontSize:'30px',textAlign:'center'}}>CALCULATOR APP</p>
                </div>
                <div >
                    <input
                        type='text'
                        placeholder='0'
                        value={(viewCalculator.ans).length === 0 ? viewCalculator.number:viewCalculator.ans}
                        
                        style={{width:'100%',height:'90px',textAlign:'right',fontSize:'50px'}}
                    />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly',backgroundColor:'blue' }}>


                    <button onClick={() => dispatch(loadClear())} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'white',borderRadius:'15px' }}>AC</button>
                    <button onClick={() => dispatch(loadBackspace())} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'white',color:'black',borderRadius:'15px'  }}>C</button>
                    <button onClick={() => dispatch(loadButtons('/'))} style={{flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'white',color:'black',borderRadius:'15px'  }}>/</button>
                    <button onClick={() => dispatch(loadButtons('+'))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'white',color:'black',borderRadius:'15px' }}>+</button>


                    <button onClick={() => dispatch(loadButtons(7))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'black',color:'whitesmoke',borderRadius:'15px'  }}>7</button>
                    <button onClick={() => dispatch(loadButtons(8))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'black',color:'whitesmoke',borderRadius:'15px'  }}>8</button>
                    <button onClick={() => dispatch(loadButtons(9))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'black',color:'whitesmoke',borderRadius:'15px'  }}>9</button>
                    <button onClick={() => dispatch(loadButtons('*'))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'white',color:'black',borderRadius:'15px' }}>*</button>


                    <button onClick={() => dispatch(loadButtons(4))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'black',color:'whitesmoke',borderRadius:'15px'  }}>4</button>
                    <button onClick={() => dispatch(loadButtons(5))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'black',color:'whitesmoke',borderRadius:'15px'  }}>5</button>
                    <button onClick={() => dispatch(loadButtons(6))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px',backgroundColor:'black',color:'whitesmoke',borderRadius:'15px'  }}>6</button>
                    <button onClick={() => dispatch(loadButtons('-'))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'white',color:'black',borderRadius:'15px' }}>-</button>

                    <button onClick={() => dispatch(loadButtons(1))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'black',color:'whitesmoke',borderRadius:'15px' }}>1</button>
                    <button onClick={() => dispatch(loadButtons(2))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'black',color:'whitesmoke',borderRadius:'15px' }}>2</button>
                    <button onClick={() => dispatch(loadButtons(3))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'black',color:'whitesmoke',borderRadius:'15px' }}>3</button>
                    <button onClick={() => dispatch(loadButtons('%'))} style={{ flex:'300px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'white',color:'black',borderRadius:'15px' }}>%</button>

                    {/* <button style={{ flex:'200px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' }}>1</button> */}
                    <button onClick={() => dispatch(loadButtons(0))} style={{ flex:'200px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'black',color:'whitesmoke',borderRadius:'15px' }}>0</button>
                    <button onClick={() => dispatch(loadButtons('.'))} style={{ flex:'200px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'black',color:'whitesmoke',borderRadius:'15px' }}>.</button>
                    <button onClick={() => dispatch(loadAns())} style={{ flex:'550px' ,width: '100px', margin: '10px', textAlign: 'center', lineHeight: '75px', fontSize: '30px' ,backgroundColor:'green',color:'whitesmoke',borderRadius:'15px' }}>=</button>




                </div>
            </div>
        </section >
        </React.Fragment>  

    )
}
export default CalculatorApp;