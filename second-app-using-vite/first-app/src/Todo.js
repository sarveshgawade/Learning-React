import { useState } from "react"

function Todo(){

    let [todos,updateTodo] = useState(['todo1','todo2'])

    // key is used to uniquely identify each element (li)
    return (
        <ul>
            { todos.map((todoItem,index)=><li key={index}>{todoItem}</li>)}
            <button onClick={()=>updateTodo([...todos,'todo3','todo4'])}>Click</button>
        </ul>
    )
}

export default Todo