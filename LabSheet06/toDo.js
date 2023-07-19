function TodoList(props) {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {props.todoList.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
  
  export default TodoList;