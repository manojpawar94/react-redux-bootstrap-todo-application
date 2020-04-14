import React from 'react';
import './App.css';
import AddTodoItem from './containers/AddTodoItem';
import TodoItemList from './containers/TodoItemList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterComponent from './template/FilterLinkTemplate';

function App() {
  let title = "Todo Application - {React, Redux, React-Bootstrap}";
  return (
    <Container>
      <Row>
        <Col>
          <h3 style={{ fontWeight: 'bolder' }}>{title}</h3>
          <h5>Developed by Manoj Pawar</h5>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <AddTodoItem />
          <h5 style={{ paddingBottom: '12px', fontWeight: 'bolder' }}>Your To-do item list</h5>
          <TodoItemList />
        </Col>
        <Col sm={6}></Col>
      </Row>
      <Row>
        <Col>
          <FooterComponent />
        </Col>
      </Row>
    </Container >
  );
}

export default App;
