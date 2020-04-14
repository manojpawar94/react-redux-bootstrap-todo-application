import React, { Component } from 'react';
import propTypes from 'prop-types';
import TodoItem from '../containers/TodoItem';
import PaginationComponent from './PaginationComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TodoItemListComponent extends Component {

    constructor() {
        super();
        this.state = {
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        if (this.props.todos.length !== 0 && this.state.pageOfItems.length === 0) {
            this.setState({
                pageOfItems: []
            })
        }
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <>
                <Row style={{ height: '366px' }}>
                    <Col>
                        {
                            this.state.pageOfItems.map((todo, index) => {
                                return (
                                    <TodoItem key={index + 1} {...todo} />
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col style={{ textAlign: 'center' }}>
                        <PaginationComponent items={this.props.todos} onChangePage={this.onChangePage} />
                    </Col>
                </Row>
            </>
        )
    }

}


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