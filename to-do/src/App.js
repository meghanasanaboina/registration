import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector , useDispatch } from 'react-redux';




//To-Do app



const TodoInput = () =>{

  const [newTodo ,setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value);
  const dispatch = useDispatch();
  const handleClick = () => dispatch({
    type:'ADD_TODO',
    payload: {
        lable:newTodo,
        id:Math.ceil(Math.random() * 100),
    }
  })
  
  return (
    <React.Fragment>
      <div style={{margin:'3% 20% 1% 40%'}}>
       <input value={newTodo} onChange={handleChange} type="text"  />
        <button onClick={ handleClick }>ADD TODO</button>
      </div>
    </React.Fragment>
  )
  };
  
  const Todos = () =>{
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    if(!todos || !todos.length){
        return <p style={{margin:'3% 20% 50% 50%'}}>NO TODOS</p>
    }
    const handleClick = id => dispatch({
        type:'DELETE_TODO',payload: id,
    });
    return (
      <div >
        <ul style={{margin:'3% 20% 50% 50%'}}>
            {todos.map(todo => <li onClick={() => handleClick(todo.id)} style={{cursor:'pointer'}}>{todo.lable}</li>)}
        </ul>
      </div>  
    )
  };

function App() {
  return (
    <div>
    <p style={{margin:'2% 50% 1% 50% '}}>
      TODOS
    </p>
  <TodoInput />
  <Todos />
  
  </div>
  );
}

export default App;
