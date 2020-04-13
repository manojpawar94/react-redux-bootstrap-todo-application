import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
            //console.log('it has default value');
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
            <div className="card">
                {!isEditable ? (
                    <div className="list-container">
                        <span className="text" style={{
                            textDecoration: completed ? 'line-through' : 'none'
                        }}>{id} - {text}</span>
                        <div className="action">
                            <button type="button" className="button-icon" onClick={this.toggleIsEditable}>
                                <i className="material-icons">create</i>
                            </button>
                            <button type="button" className="button-icon" onClick={event => this.props.remove(id)}>
                                <i className="material-icons">delete</i>
                            </button>
                            <button type="button" className="button-icon" onClick={event => this.props.done(id)}>
                                {
                                    completed ? (<i className="material-icons" >cancel</i>) : (<i className="material-icons" >done</i>)
                                }
                            </button>
                        </div>
                    </div>
                ) : (
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="input"
                                type="text"
                                value={this.state.updateTodoText === 'Default' ? text : this.state.updateTodoText}
                                onChange={this.setTodoText}
                            />
                            <button type="submit" className="button-icon">
                                <i className="material-icons">done</i>
                            </button>
                            <button type="button" className="button-icon" onClick={this.toggleIsEditable}>
                                <i className="material-icons">cancel</i>
                            </button>
                        </form>

                    )}

            </div>
        )
    }
}

TodoItemComponent.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}




