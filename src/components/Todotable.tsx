import React from 'react';
import '../App.css';

export default function TodoTable(props: any) {

    return(
        <div className='Todotable'>
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th><th>Priority</th></tr>
                {props.todos.map((todo: any, index: any) => 
                    <tr key={index}>

                    <td>{todo.date}</td>
                    <td>{todo.desc}</td>
                    <td>{todo.prio}</td>
                    <td><button onClick={() => props.delTodo(index)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
