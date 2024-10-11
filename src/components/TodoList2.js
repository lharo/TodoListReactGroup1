import React, { useState } from 'react'

const TodoList2 = () => {

    const [todoItems, setTodoItems] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [isEdit, setIsEdit] = useState(null)
    const [editingValue, setEditingValue] = useState('')

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type='text'
                placeholder='Add a new todo'
                id='new-item'
                value={newTodo}
                onChange={(e) => { setNewTodo(e.target.value) }}
            />
            <button
                onClick={() => {
                    setTodoItems([...todoItems, {
                        text: newTodo,
                        id: Date.now()
                    }]);
                    setNewTodo("")
                }}
            >Add Todo</button>
            <ul>
                {
                    todoItems.map((todo) => (
                        <li key={todo.id}>

                            {isEdit !== todo.id ? (
                                <>
                                    <span>{todo.text}</span>
                                    <button
                                        onClick={() => {
                                            setIsEdit(todo.id)
                                            setEditingValue(todo.text)
                                        }}
                                    >Edit</button>
                                    <button
                                        onClick={() => {
                                            setTodoItems(
                                                todoItems.filter((t) => t.id !== todo.id)
                                            )
                                        }}
                                    >Delete</button>
                                </>
                            ) : (
                                <>
                                    <input
                                        type='text'
                                        placeholder='Add a new todo'
                                        id='new-item'
                                        value={editingValue}
                                        onChange={(e) => { setEditingValue(e.target.value) }}
                                    />
                                    <button
                                        onClick={() => {
                                            setTodoItems(
                                                todoItems.map((t) => {
                                                    if(t.id === isEdit) {
                                                        t.text = editingValue
                                                    }
                                                    return t
                                                })
                                            )
                                            setIsEdit(null)
                                        }}
                                    >Save</button>

                                </>

                            )}

                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default TodoList2