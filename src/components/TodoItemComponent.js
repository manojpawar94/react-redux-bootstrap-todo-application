import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default class TodoItemComponent extends Component {

    constructor() {
        super();
        this.state = {
            isEditable: false,
            updateTodoText: 'Default'
        }
        this.setTodoText = this.setTodoText.bind(this);
        this.toggleIsEditable = this.toggleIsEditable.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setTodoText(event) {
        this.setState({
            updateTodoText: event.target.value
        });
    }

    toggleIsEditable() {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.updateTodoText.trim()) {
            //console.log('Empty value');
            return
        } else if (this.state.updateTodoText === 'Default') {
            this.setState({
                isEditable: false
            })
            return
        } else {
            //console.log(`Submitting todoText ${this.state.updateTodoText}`);
            this.props.update(this.props.id, this.state.updateTodoText);
            this.setState({
                isEditable: false
            })
        }
    }

    render() {
        let { isEditable } = this.state;
        let { id, text, completed } = this.props;

        return (
            <Card>
                {!isEditable ? (
                    <InputGroup size="lg">
                        <FormControl
                            aria-describedby="basic-addon2"
                            style={{
                                textDecoration: completed ? 'line-through' : 'none',
                                border: 'none',
                                background: 'none',
                                height: '46px'
                            }}
                            value={text}
                            disabled
                        />
                        <InputGroup.Append>
                            <OverlayTrigger placement="bottom"
                                overlay={
                                    <Tooltip>
                                        <strong>Edit</strong>.
                                                </Tooltip>
                                }
                            >
                                <Button variant="outline-secondary" onClick={this.toggleIsEditable}>
                                    <i className="material-icons">create</i>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom"
                                overlay={
                                    <Tooltip>
                                        <strong>Delete</strong>.
                                    </Tooltip>
                                }
                            >
                                <Button variant="outline-secondary" onClick={event => this.props.remove(id)}>
                                    <i className="material-icons">delete</i>
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom"
                                overlay={
                                    <Tooltip>
                                        <strong>{completed ? 'Mark Active' : 'Mark Completed'}</strong>.
                                    </Tooltip>
                                }
                            >
                                <Button variant="outline-secondary" onClick={event => this.props.done(id)}>
                                    {
                                        completed ? (<i className="material-icons" >cancel</i>) : (<i className="material-icons" >done</i>)
                                    }
                                </Button>
                            </OverlayTrigger>
                        </InputGroup.Append>
                    </InputGroup>
                ) : (
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <InputGroup size="lg">
                                    <FormControl
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        type="text"
                                        value={this.state.updateTodoText === 'Default' ? text : this.state.updateTodoText}
                                        onChange={this.setTodoText}
                                        style={{ height: '46px' }}
                                    />
                                    <InputGroup.Append>
                                        <OverlayTrigger placement="bottom"
                                            overlay={
                                                <Tooltip>
                                                    <strong>Update</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button type="submit" variant="outline-secondary">
                                                <i className="material-icons">done</i>
                                            </Button>
                                        </OverlayTrigger>
                                        <OverlayTrigger placement="bottom"
                                            overlay={
                                                <Tooltip>
                                                    <strong>Cancel</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button variant="outline-secondary" onClick={this.toggleIsEditable} >
                                                <i className="material-icons">cancel</i>
                                            </Button>
                                        </OverlayTrigger>

                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Row>
                        </Form>
                    )
                }

            </Card>
        )
    }
}

TodoItemComponent.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}
