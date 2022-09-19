import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState("");

    function addTodo() {
        todos.push(message);

        // for (let i=0; i < todos.length; i++){
        //     console.log("message: " + todos.at(i));
        // }
    }

    const handleMessageChange = (event) => {
        console.log(event.target.value);
        setMessage(event.target.value);
    }

    return (
        <div>
            <textarea
                // value={message}
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