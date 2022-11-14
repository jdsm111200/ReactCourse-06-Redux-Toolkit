import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  // const { data: todos = [], isLoading, isFetching } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo = {}, isLoading, isFetching } = useGetTodoQuery(todoId);
  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId > 1) setTodoId(todoId - 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <p>isLoading : {isLoading.toString()}</p>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
      {/*     <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "PENDING"}</strong> -{" "}
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
