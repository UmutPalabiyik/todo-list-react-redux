import "../../styles/Todos.scss"
import { useSelector } from "react-redux";
import TodoItem from "../../components/TodoItem";
import { selectTodos } from "./todosSlice";

const Todos = () => {
  const todos = useSelector(selectTodos);

  return (
    <div className="todos">
      <ul className="todos__list">
        {todos.map((todo, key) => {
          console.log(todo)
          return <TodoItem todo={todo} key={key} />;
        })}
      </ul>
    </div>
  );
};

export default Todos;
