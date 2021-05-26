import "./App.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Todos from "./features/todos/Todos";
import { addTodo } from "./features/todos/todosSlice";

const App = () => {
  const [inputs, setInputs] = useState({ name: "", description: "" });
  const dispatch = useDispatch();
  

  return (
    <div className="app">
      <h1 className="app__header">My Todos</h1>
      <div className="app__wrapper">
        <div className="app__inputs">
          <div className="app__name">
            <span className="app__name-span">Name</span>
            <input
              className="app__name-input"
              onChange={(e) => {
                setInputs({ ...inputs, name: e.target.value });
              }}
              value={inputs.name}
              type="text"
            />
          </div>

          <div className="app__description">
            <span className="app__description-span">Description</span>
            <input
              className="app__description-input"
              onChange={(e) => {
                setInputs({ ...inputs, description: e.target.value });
              }}
              value={inputs.description}
              type="text"
            />
          </div>
        </div>

        <div
          className="app__button"
          onClick={() => {
            if (inputs.name && inputs.description) {
              dispatch(addTodo(inputs));
              setInputs({ name: "", description: "" });
            }
          }}
        >
          Add Todo
        </div>
      </div>
      <Todos />
    </div>
  );
};

export default App;
