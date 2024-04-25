"use client";
import React, { useState } from 'react'

type Todo = {
    id: string,
    name: string
}
const CustomForm = () => {
    const [queriedFilteredItems, setQueriedFilteredItems] = useState<string>('')
    const [newTodoName, setNewTodoName] = useState<string>('')
    const [todos, setTodos] = useState<Todo[]>([])

    const changeTodoName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoName(() => event.target.value)
    }

    const changeQueriedFilteredItems = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQueriedFilteredItems(() => event.target.value)
    }

    const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (newTodoName === '') return

        setTodos(previousTodos => ([...previousTodos,
        {
            id: crypto.randomUUID().replace(/-/g, ''),
            name: newTodoName
        }]
        ))
        setNewTodoName(() => '')
    }

    const filteredTodos = todos.filter((currentTodo) =>
        currentTodo.name.toLowerCase().includes(queriedFilteredItems.toLowerCase()))

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='filter-todos-input'>
                    Filter todo's:<input id='filter-todos-input'
                        data-testid='ba94460be6d'
                        type='text'
                        value={queriedFilteredItems}
                        onChange={changeQueriedFilteredItems} />
                </label>
                <label htmlFor='add-todos-input'>
                    Add todo:<input id='add-todos-input'
                        data-testid='83114257f96e'
                        type='text'
                        value={newTodoName}
                        onChange={changeTodoName} />
                </label>
                <button type='submit'
                    data-testid='ea3fb194178a44'>
                    Add todo
                </button>
            </form>
            {filteredTodos.map(currentTodo => (
                <div key={currentTodo.id}>
                    {currentTodo.name}
                </div>))}
        </div>
    )
}

export default CustomForm