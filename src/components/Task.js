import "./Task.css";

function Task({ task, handleDelete }) {
  return (
    <li key={handleDelete}>
      {task}
      <button onClick={()=>handleDelete(handleDelete)}>削除</button>
      <button >編集</button>
    </li>
  );
}

export default Task;