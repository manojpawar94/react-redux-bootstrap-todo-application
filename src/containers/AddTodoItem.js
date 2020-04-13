import { connect } from 'react-redux';
import { AddTodoItemComponent } from '../components/AddTodoItemComponent';

const AddTodoItem = connect()(AddTodoItemComponent);
export default AddTodoItem;