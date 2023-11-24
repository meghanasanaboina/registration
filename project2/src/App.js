import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  const state = useSelector(state => state.user)
  console.log(state)
  return (
    <div className="App">
      
        {(state.status==200)?<Home />:<LoginForm />}
      
    </div>
  );
}

export default App;
