import React from 'react';
import './App.css';
import AddTodoItem from './containers/AddTodoItem';
import TodoItemList from './containers/TodoItemList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  let title = "React + Redux Todo Application -  Manoj";
  return (
    <Container>
      <Row>
        <h3 style={{ fontWeight: 'bolder' }}>{title}</h3>
      </Row>
      <hr></hr>
      <AddTodoItem />
      <TodoItemList />
    </Container>
  );
}

export default App;
