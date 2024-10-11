import React, { useState } from 'react'
import NonEditedItem from './NonEditedItem'

const TodoList3 = () => {

    const [todoList, setTodoList] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [editTodoValue, setEditTodoValue] = useState('')
    const [elementEdited, setElementEdited] = useState(null)

    return (
        <div>
            <h1>Todo App</h1>
            <input
                placeholder='Add a new todo'
                type='text'
                value={newTodo}
                onChange={(e) => { setNewTodo(e.target.value) }}
            />
            <button
                onClick={() => {
                    setTodoList([
                        ...todoList,
                        { text: newTodo, id: Date.now() }
                    ])
                    setNewTodo('')
                }}
            >Add Todo</button>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>

                        {todo.id !== elementEdited ? (
                                        <NonEditedItem
                                            key={todo.id}
                                            todo={todo}
                                            setElementEdited={setElementEdited}
                                            setEditTodoValue={setEditTodoValue}
                                            setTodoList={setTodoList}
                                            todoList={todoList}
                                        />
                        
                            // <>
                            //     <span>{todo.text}</span>
                            //     <button
                            //         onClick={() => {
                            //             setElementEdited(todo.id)
                            //             setEditTodoValue(todo.text)
                            //         }}
                            //     >Edit</button>
                            //     <button
                            //         onClick={() => {
                            //             setTodoList(
                            //                 todoList.filter((t) =>
                            //                     t.id !== todo.id
                            //                 ))
                            //         }}
                            //     >Delete</button>
                            // </>

                        ) : (
                                <>
                                    <input
                                        placeholder='Add a new todo'
                                        type='text'
                                        value={editTodoValue}
                                        onChange={(e) => { setEditTodoValue(e.target.value) }}
                                    />
                                    <button
                                        onClick={() => {
                                            setTodoList(todoList.map( (newChange ) => {
                                                if(newChange.id === elementEdited) {
                                                    newChange.text = editTodoValue
                                                }  
                                                return newChange;
                                            }))
                                            setElementEdited(null)
                                        }}
                                    >Save</button>
                                </>
                            )
                        }
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TodoList3