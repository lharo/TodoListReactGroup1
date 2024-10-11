import React from 'react'

const NonEditedItem = ({ todo, setElementEdited, setEditTodoValue, setTodoList, todoList }) => {
    return (

        <>
            <span>{todo.text}</span>
            <button
                onClick={() => {
                    setElementEdited(todo.id)
                    setEditTodoValue(todo.text)
                }}
            >Edit</button>
            <button
                onClick={() => {
                    setTodoList(
                        todoList.filter((t) =>
                            t.id !== todo.id
                        ))
                }}
            >Delete</button>
        </>
    )
}

export default NonEditedItem