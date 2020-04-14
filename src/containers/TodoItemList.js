import { connect } from 'react-redux';
import TodoItemListComponent from "../components/TodoItemListComponent"
import { VisibilityFilters } from '../constants/TodoConstant';

const getVisibleTodos = (todos, filter) => {
    //console.log(`inside method:(${filter}) ${JSON.stringify(todos)}`);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => {
    //console.log(`before method: -- ${JSON.stringify(state)}`);
    return ({
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    })
}

const TodoItemList = connect(mapStateToProps)(TodoItemListComponent);
export default TodoItemList;