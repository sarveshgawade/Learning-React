import { useState } from "react"

function Todo(){

    let [todos,updateTodo] = useState(['todo1','todo2'])

    return (
        <ul>
            { todos.map((todoItem)=><li>{todoItem}</li>)}
            <button onClick={()=>updateTodo([...todos,'todo3','todo4'])}>Click</button>
        </ul>
    )
}

export default Todo