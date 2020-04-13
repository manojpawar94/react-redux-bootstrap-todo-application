import { connect } from 'react-redux';
import { editTodoItem, removeTodoItem, markTodoItemCompleted } from '../actions/TodoActions';
import TodoItemComponent from '../components/TodoItemComponent';

const mapDispatchToProps = (dispatch) => {
    return {
        update: (id, text) => dispatch(editTodoItem(id, text)),
        remove: (id) => dispatch(removeTodoItem(id)),
        done: (id) => dispatch(markTodoItemCompleted(id))
    }
}

const TodoItem = connect(null, mapDispatchToProps)(TodoItemComponent);
export default TodoItem;
