import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import TodosItemUI from './TodosItemUI'

const TODOS_DELETE_BUTTON_CLASS_NAME = "todos-item_delete";
const TODOS_CHECKBOX_CLASS_NAME = ["todos-item_done-mark",
    "todos-item_undone-mark"];

export default class TodosListUI extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(event) {
        switch (event.target.className) {
            case TODOS_CHECKBOX_CLASS_NAME[0]:
            case TODOS_CHECKBOX_CLASS_NAME[1]: {
                this.props.onToggleTodos(
                    event.target.parentNode.parentNode.id)
            } break;

            case TODOS_DELETE_BUTTON_CLASS_NAME: {
                this.props.onDeleteTodos(
                    event.target.parentNode.parentNode.id)
            } break;
        }
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this)
            .addEventListener('click', this.handlerClick);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this)
            .removeEventListener('click', this.handlerClick);
    }

    render() {
        return (
            <div className="todos-list">
                {this.props.todosArray.map((todosElement) =>
                    <TodosItemUI key={todosElement.id}
                               completed={todosElement.completed}
                               currentFilter=
                                   {this.props.currentFilter}
                               value={todosElement.text}
                               id={todosElement.id}
                    />
                )}
            </div>
        )
    }

}

TodosListUI.propTypes = {
    onToggleTodos: PropTypes.func.isRequired,
    onDeleteTodos: PropTypes.func.isRequired,
    todosArray: PropTypes.array.isRequired,
    currentFilter: PropTypes.string.isRequired
};