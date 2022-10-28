import React, { useState } from 'react';
import TodoTable from './Todotable';


export default function Todolist() {

    interface TodoInterface {
      desc: string,
      date: string,
      prio: string
    }

    const [todo, setTodo] = useState<TodoInterface>({} as TodoInterface);
    const [todos, setTodos ] = useState<Array<TodoInterface>>([]);
  
    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    }
  
    const addTodo = (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTodos([...todos, todo]);
    }
  
    const delTodo = (id: any) => {
      setTodos(todos.filter((todo, index) => id !== index));
    }

    return(
        <div >
         <fieldset>
          <legend>Add Todo:</legend>
              <form onSubmit={addTodo}>
                    <label>Description:</label><input type="text" value={todo.desc} name="desc" onChange={inputChanged}/>
                    <label>Date:</label><input type="text" value={todo.date} name="date" onChange={inputChanged}/>
                    <label>Priority<input type="text" value={todo.prio} name="prio" onChange={inputChanged}/></label>
                    <button type="submit">Add</button>
              </form>
         </fieldset>
        
         <TodoTable todos={todos} delTodo={delTodo}/>
         
        </div>
    );
}
  