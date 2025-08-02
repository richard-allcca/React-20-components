import PropTypes from 'prop-types';
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo }) {
  return (
    <ul className="todo-list" >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired
};
