import React, { useState } from 'react';
import { addTodoItem } from '../actions/TodoActions';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export const AddTodoItemComponent = ({ dispatch }) => {

    const [todoText, setTodoText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoText.trim()) {
            //console.log('Empty value')
            return
        }
        //console.log(`Submitting todoText ${todoText}`);
        dispatch(addTodoItem(todoText));
        setTodoText('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <InputGroup size="lg" className="mb-3">
                    <FormControl
                        placeholder="Enter to-do task"
                        aria-label="Enter to-do task"
                        aria-describedby="basic-addon2"
                        type="text"
                        value={todoText}
                        onChange={event => setTodoText(event.target.value)}
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary">Add Task</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Row>
        </Form>
    );
}