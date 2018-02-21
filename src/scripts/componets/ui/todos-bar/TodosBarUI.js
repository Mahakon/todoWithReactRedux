import React from 'react'
import PropTypes from 'prop-types'

import TodosFilters from '../../containers/todos-bar/TodosFilters'
import TodosCounter from '../../containers/todos-bar/TodosCounter'
import TodosDeleteAllCompletedButton from
        '../../containers/todos-bar/TodosDeleteAllCompletedButton'

export default class TodosBarUI extends React.Component{
    constructor(props) {
        super(props);
        this.setVisibility = this.setVisibility.bind(this);
    }

    setVisibility() {
        if (this.props.numTodosItems == 0) {
            return {
                display: "none"
            }
        }

        return {
            display: "flex"
        }
    }

    render() {
        return (
            <div className="todos-actions-bar" style={this.setVisibility()}>
                <TodosCounter/>
                <TodosFilters/>
                <TodosDeleteAllCompletedButton/>
            </div>
        )
    }

}

TodosBarUI.propTypes = {
    numTodosItems: PropTypes.number.isRequired
};