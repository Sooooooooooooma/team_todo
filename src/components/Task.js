import "./Task.css";

function Task({ task, onDelete }) {
  return (
    <li>
      {task}
    </li>
  );
}

export default Task;