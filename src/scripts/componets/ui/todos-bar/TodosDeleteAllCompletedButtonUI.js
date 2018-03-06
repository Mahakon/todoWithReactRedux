import React from 'react'
import PropTypes from 'prop-types'

export default class TodosDeleteAllCompletedButtonUI extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        this.props.onDeleteAllCompletedTodos()
    }

    render() {
        return (
            <div className="todos-actions-bar_delete">
                <button className="todos-actions-bar_delete-done"
                        aria-label="delete all done items"
                        onClick={this.handlerClick}>
                    Clear completed
                </button>
            </div>
        )
    }

}

TodosDeleteAllCompletedButtonUI.propTypes = {
    onDeleteAllCompletedTodos: PropTypes.func.isRequired
};
