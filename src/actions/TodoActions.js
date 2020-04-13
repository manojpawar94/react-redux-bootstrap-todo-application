import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, TODO_COMPLETED } from '../constants/TodoConstant';

//action to add new item in todo list
export const addTodoItem = (text) => {
    let trimmedText = text.trim();
    return {
        type: ADD_ITEM,
        payload: trimmedText
    }
}

//action to edit the item in todo list
export const editTodoItem = (id, text) => {
    return {
        type: EDIT_ITEM,
        payload: {
            id: id,
            text: text
        }
    }
}

//action to remove the item from todo list
export const removeTodoItem = (id) => (
    {
        type: REMOVE_ITEM,
        payload: id
    }
)

//action to remove the item from todo list
export const markTodoItemCompleted = (id) => (
    {
        type: TODO_COMPLETED,
        payload: id
    }
)
