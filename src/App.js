import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { addTodo, deleteTodo, selectTodos } from "./features/todos/todosSlice"

const App = () => {

  const todos = useSelector(selectTodos)
  console.log(todos)
  return (
    <div className="app">
      <div className="app__input-wrapper">
        <input className="app__input"></input>
        <button className="app__add-button">Add </button>
      </div>

      <div className="app__todos">

      </div>
    </div>
  );
}

export default App;
