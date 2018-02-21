import React from 'react'
import PropTypes from 'prop-types'

import {FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED}
                            from '../../../constants/FilterTypes'

export default class TodosItemUI extends React.Component {
    constructor(props) {
        super(props);
        this.setClassName = this.setClassName.bind(this);
        this.setVisibility = this.setVisibility.bind(this);
    }

    setClassName(completed, type = 'item') {
        switch (type) {
            case 'mark-w': {
                return (!completed) ?
                    'todos-item_undone-mark-w' :
                    'todos-item_done-mark-w'
            } break;

            case 'mark-icon': {
                return (!completed) ?
                    'todos-item_undone-mark-icon' :
                    'todos-item_done-mark-icon'
            } break;

            case 'mark': {
                return (!completed) ?
                    'todos-item_undone-mark' :
                    'todos-item_done-mark'
            } break;

            default: {
                return (!completed) ?
                    'todos-item' :
                    'todos-item __done'
            }
        }
    }

    setVisibility(currentFilter, completed) {
        switch (currentFilter) {
            case FILTER_ALL: {
                return {
                    display: 'block'
                };
            } break;

            case FILTER_ACTIVE: {
                return (completed) ?
                    {
                        display: "none"
                    } :
                    {
                        display: "block"
                    }
            } break;

            case FILTER_COMPLETED : {
                return (!completed) ?
                    {
                        display: "none"
                    } :
                    {
                        display: "block"
                    }
            } break;
        }
    }

    render() {
        return (
            <div className={this.setClassName(this.props.completed)} style=
                {this.setVisibility(this.props.currentFilter,
                    this.props.completed)} id={this.props.id}>

                <div className={this.setClassName(this.props.completed,
                    'mark-w') + " todos-item_belonging-checkbox"}>

                    <div className={this.setClassName(
                        this.props.completed, 'mark-icon')}></div>

                    <input className={this.setClassName(
                        this.props.completed, 'mark')} aria-label=
                        "mark undone" type="checkbox"/>

                </div>

                <div className="todos-item_delete-w">

                    <div className="todos-item_delete_icon"></div>

                    <button className="todos-item_delete"
                            aria-label="delete item"></button>

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
    value: PropTypes.string.isRequired
};