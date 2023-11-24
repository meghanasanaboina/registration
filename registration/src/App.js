import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Register from './Components/Register';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import React from 'react';
import EmailVerification from './Components/EmailVerification';
import Freeexamlist from './Components/Freeexamlist';
import QuestionPaper from './Components/QuestionPaper';
import Premiumexam from './Components/Premiumexams';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<LoginForm/>} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/Freeexamlist" element={<Freeexamlist />} />
        <Route path="/Premiumexams" element={<Premiumexam />} />
        <Route path="/Freeexamlist/:id" element={<QuestionPaper />} />
                
      </Routes>
      </BrowserRouter>
       
     
      
    </div>
    </>
  );

}

export default App;
