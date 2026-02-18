function Todo({ task }) {
  function deletehandler() {
    console.log("Delete", task);
    // you can add alert or later connect to real remove logic
    alert(`Deleted: ${task}`);
  }

  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <button onClick={deletehandler}>Delete</button>
    </div>
  );
}

export default Todo;
