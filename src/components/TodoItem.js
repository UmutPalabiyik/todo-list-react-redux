import "../styles/TodoItem.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState(false);

  const { name, description } = props.todo;
  console.log(complete);
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
              complete ? "item__complete--invisible" : ""
            }`}
            onClick={() => {
              setComplete(true);
            }}
          >
            Complete
          </div>
          <div className="item__delete">Delete</div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
