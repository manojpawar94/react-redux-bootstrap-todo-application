import { TodoActions, VisibilityFilterActions } from '../constants/TodoConstant';

//action to add new item in todo list
export const addTodoItem = (text) => {
    let trimmedText = text.trim();
    //console.log(`${trimmedText} in action`)
    return {
        type: TodoActions.ADD_ITEM,
        payload: trimmedText
    }
}

//action to edit the item in todo list
export const editTodoItem = (id, text) => {
    return {
        type: TodoActions.EDIT_ITEM,
        payload: {
            id: id,
            text: text
        }
    }
}

//action to remove the item from todo list
export const removeTodoItem = (id) => (
    {
        type: TodoActions.REMOVE_ITEM,
        payload: id
    }
)

//action to remove the item from todo list
export const markTodoItemCompleted = (id) => (
    {
        type: TodoActions.TODO_COMPLETED,
        payload: id
    }
)

export const toggleTodo = id => ({
    type: TodoActions.TOGGLE_TODO,
    id
})

export const setVisibilityFilter = filter => ({
    type: VisibilityFilterActions.SET_VISIBILITY_FILTER,
    filter
})

