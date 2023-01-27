"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    
    { todoText: "Todo 1", completed: false },
    { todoText: "Todo 2", completed: true },
    // { todoText: "todo 3", completed: true },
    // { todoText: "todo 4", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

   
    const newTodos = todos.map((todo) => {
      console.log(": ", );
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <div style={{padding : "10px", marginLeft:"40px", fontSize:"30px"}}>Todo App</div>
      <input style={{padding : "10px", marginLeft:"50px"}}
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button style={{fontSize:"22px", paddingBottom:"5px", color:"white", backgroundColor:"blue"}} onClick={addTodo} >Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "orange",
                fontStyle: "oblique",
                listStyle: "none",
                
            }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button style={{
                padding: "20px",
                margin: "20px",
                fontSize:"10px"


              }}
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}