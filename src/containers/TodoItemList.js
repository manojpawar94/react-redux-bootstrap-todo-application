import { connect } from 'react-redux';
import TodoItemListComponent from "../components/TodoItemListComponent"

const mapStateToProps = (state) => ({
    todos: state.todos
})

const TodoItemList = connect(mapStateToProps)(TodoItemListComponent);
export default TodoItemList;