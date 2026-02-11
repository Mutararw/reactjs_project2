function Todo({ task }) {
  function deletehandler() {
    console.log("Delete", task);
  }

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={() => deletehandler()}>Delete</button>
    </div>
  );
}

export default Todo;
