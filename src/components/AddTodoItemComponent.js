import React, { useState } from 'react';
import { addTodoItem } from '../actions/TodoActions';

export const AddTodoItemComponent = ({ dispatch }) => {

    const [todoText, setTodoText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoText.trim()) {
            //console.log('Empty value')
            return
        }
        //console.log(`Submitting todoText ${todoText}`);
        dispatch(addTodoItem(todoText));
        setTodoText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                value={todoText}
                onChange={event => setTodoText(event.target.value)}
            />
            <button type="submit" className="button">Add Item</button>
        </form>
    );
}