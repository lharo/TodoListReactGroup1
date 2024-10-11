import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import TodoList from './components/TodoList';
import TodoList2 from './components/TodoList2';
import TodoList3 from './components/TodoList3';

const App = () => {

  // let count = 0;
  const [list, setList] = useState([1,2,3]);
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    console.log("Se creo el componente")
  }, [])


  
  // useEffect(() => {
  //   console.log("Se actualizo el contador")
  // }, [count])

  return (
    <div>
      {/* <TodoList></TodoList> */}
      <TodoList2></TodoList2>
      <TodoList3 />
      {/* <ul>

      {
        list.map((todo) => ((
          <li>{todo}</li>
        )))
      }
      </ul>
      <button onClick={
        () => setList([
          ...list,
          1,2,3
        ])
      }>Vaciar Lista</button>

      <input
        type='text'
        value={inputValue}
        onChange={ (e) => setInputValue(e.target.value) }
      /> */}

      {/* <h1>{count}</h1>
      <button onClick={() => {
        setCount(count + 1)
        console.log('count', count)
      }}> + </button>
      <button onClick={() => {
        setCount(count - 1)
        console.log('count', count)
      }}> - </button> */}
    </div>
  );
}

export default App;
