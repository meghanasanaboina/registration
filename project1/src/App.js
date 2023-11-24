
import './App.css';
import React from 'react';
//import Header from './Components/Header/Header';
//import Footer from './Components/Footer/Footer';
//import AppRoutes from './Components/Routing component/AppRoutes';
import Banner from './Components/10000codersusingreact/Banner/Banner';
import Header from './Components/10000codersusingreact/Header/Header';
import Footer from './Components/10000codersusingreact/Footer/Footer';
import Main from './Components/10000codersusingreact/Main/Main';
import MountingPhase from './Components/Mounting/Mounting';
import MountingAndUpdating from './Components/MountingAndUpdating/MountingAndUpdating';
import UserData from './Components/LifeCycleMethods/UserData';
import UseEffectHook from './Components/UseEffectHook/UseEffectHook';
import UseReducerHook, { reducer } from './Components/Use Reducer/UseReducerHook';
import { UNSAFE_RouteContext } from 'react-router-dom';
import UseStateHook from './Components/Use state/UseStateHook';
import Task1 from './Components/Task/Task1';

export const UserContext = React.createContext();


// const App = () => {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     // <React.Fragment>
//     //   <Header />
//     //     <AppRoutes />
//     //   <Footer />
//     // </React.Fragment>
//     // <React.Fragment>
//     //   <Header />
//     //   <Banner />
//     //   <Main />
//     //   <Footer />
//     // </React.Fragment>
   
//     // <React.Fragment>
     
//     // <UserContext.Provider >
      

//     //   {/* <MountingPhase />  */}
//     //   {/* <MountingAndUpdating /> */}
//     //   {/* <UserData/> */}
//     //   {/* <UseEffectHook/> */}
//     //   <UseStateHook value={reducer}/>
      
//     //   <UseReducerHook />
//     // </UserContext.Provider>


//     // </React.Fragment>




//   );
// }


const App = () => {
  return (
    <React.Fragment>
      {/* <UserData /> */}

      <Task1 />
      {/* <UseEffectHook /> */}
    </React.Fragment>
  );
}

export default App;
