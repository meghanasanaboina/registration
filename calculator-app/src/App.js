import React from 'react';

import logo from './logo.svg';
import './App.css';
import CalculatorApp from './components/CalculatorApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import { store } from './redux/store';


function App() {
 
  return (
    <Provider store={store}>
    <React.Fragment>
      
      <CalculatorApp/>

    </React.Fragment>
    </Provider>
    
  );
}
 
export default App;
