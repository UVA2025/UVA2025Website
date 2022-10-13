import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState("");

    function addTodo() {
        todos.push(message);

    }

    const handleMessageChange = (event) => {
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    return (
        <div>
            <textarea
                onChange={handleMessageChange}
            />
            <button onClick={addTodo}>
                Submit
            </button>
            {todos.map((toDoName) => {
               return <ToDoItem name={toDoName} />
            })

            }
        </div>
    );
}

export default ToDoList;