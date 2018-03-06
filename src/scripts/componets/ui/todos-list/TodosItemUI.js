import React from 'react'
import PropTypes from 'prop-types'

import {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED}
                            from '../../../constants/FilterTypes'

export default class TodosItemUI extends React.Component {
    constructor(props) {
        super(props);

        this.handlerClick = this.handlerClick.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerClick() {
        this.props.deleteTodos(this.props.id)
    }

    handlerChange() {
        this.props.toggleTodos(this.props.id)
    }

    setClassItemName(completed) {
        return (!completed) ?
            'todos-item' :
            'todos-item __done'
    }

    setAriaLabelAttribute(completed) {
        return (completed) ?
            "mark done" :
            "mark undone"
    }

    setCheckedAttribute(completed) {
        return (completed) ?
            "checked" :
            ""
    }

    setVisibility(currentFilter, completed) {
        switch (currentFilter) {
            case FILTER_ALL: {
                return "block"
            } break;

            case FILTER_ACTIVE: {
                return (completed) ? "none" : "block"
            } break;

            case FILTER_COMPLETED : {
                return (!completed) ? "none" : "block"
            } break;
        }
    }

    render() {
        return (
            <div className={this.setClassItemName(this.props.completed)}
                 style={{display: this.setVisibility(
                                        this.props.currentFilter,
                                        this.props.completed)
                 }}
                 id={this.props.id}>

                <div className="todos-item_checkbox todos-item_belonging-checkbox">
                    <input className="todos-item_checkbox-ready-mark"
                           aria-label={
                               this.setAriaLabelAttribute(this.props.completed)
                           }
                           type="checkbox"
                           checked={
                               this.setCheckedAttribute(this.props.completed)
                           }
                           onChange={this.handlerChange}/>
                        <div className="todos-item_checkbox-ready-mark-w">
                            <div className="todos-item_checkbox-ready-mark-icon">
                            </div>
                        </div>
                </div>

                <div className="todos-item_delete-w">
                    <div className="todos-item_delete_icon"></div>
                    <button className="todos-item_delete"
                            aria-label="delete item"
                            onClick={this.handlerClick}>

                    </button>
                </div>

                <div className="todos-item_name-w">
                    <textarea className="todos-item_name" value=
                        {this.props.value} readOnly="readOnly">
                    </textarea>
                </div>

            </div>
        )
    }
}

TodosItemUI.propTypes = {
    completed: PropTypes.bool.isRequired,
    currentFilter: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    toggleTodos: PropTypes.func.isRequired,
    deleteTodos: PropTypes.func.isRequired
};
