import React from 'react';
import propTypes from 'prop-types';
import TodoItem from '../containers/TodoItem';

const TodoItemListComponent = ({ todos }) => (
    <div>
        {
            todos.map((todo, index) => {
                return (
                    <TodoItem key={index} {...todo} />
                )
            })
        }
    </div>
)

TodoItemListComponent.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            completed: propTypes.bool.isRequired,
            text: propTypes.string.isRequired
        }).isRequired
    )
}

export default TodoItemListComponent;