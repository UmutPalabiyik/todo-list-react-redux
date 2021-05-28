import "../styles/TodoItem.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todosSlice";

const TodoItem = ( { todo }) => {

  const dispatch = useDispatch();
  const [complete, setComplete] = useState(false);
  const { name, description, id } = todo;
  
  return (
    <li className="item">
      <div className="item__wrapper">
        <div className="item__infos">
          <div
            className={`item__name ${
              complete ? "item__name--line-through" : ""
            }`}
          >
            {name}
          </div>
          <div
            className={`item__description ${
              complete ? "item__description--line-through" : ""
            }`}
          >
            {description}
          </div>
        </div>
        <div className="item__buttons">
          <div
            className={`item__complete ${
              complete ? "item__complete--undo" : ""
            }`}
            onClick={() => {
              setComplete(!complete);
            }}
          >
            {`${complete ? "undo" : "complete"}`}
          </div>
          <div className="item__delete" onClick={() => {
            dispatch(deleteTodo(id))
          }} >Delete</div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
