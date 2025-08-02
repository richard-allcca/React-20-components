import PropTypes from 'prop-types';

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  // const handleTodoClick = () => {
  //   toggleTodo(id);
  // };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      {/* <input type="checkbox" checked={completed} onChange={handleTodoClick} /> */}
      {task}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired
};
