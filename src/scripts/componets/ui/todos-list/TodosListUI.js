import React from 'react'
import PropTypes from 'prop-types'

import TodosItemUI from './TodosItemUI'

export default class TodosListUI extends React.Component {
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
                                 toggleTodos={this.props.onToggleTodos}
                                 deleteTodos={this.props.onDeleteTodos}
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
