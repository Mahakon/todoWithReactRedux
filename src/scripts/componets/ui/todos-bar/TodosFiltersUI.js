import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import {FILTER_COMPLETED, FILTER_ACTIVE, FILTER_ALL} from
        '../../../constants/FilterTypes'


export default class TodosFiltersUI extends React.Component{
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.setFocusOnCurrentFilter = this
            .setFocusOnCurrentFilter.bind(this);
    }

    handlerClick(event) {
        switch (event.target.className) {
            case FILTER_ALL : {
                this.changeFilter(FILTER_ALL);
            } break;

            case FILTER_ACTIVE: {
                this.changeFilter(FILTER_ACTIVE);
            } break;

            case FILTER_COMPLETED: {
                this.changeFilter(FILTER_COMPLETED);
            } break;
        }
    }

    setFocusOnCurrentFilter(currentFilter, choosenFilter) {
        switch (choosenFilter) {
            case FILTER_ALL: {
                if (currentFilter.localeCompare(FILTER_ALL) === 0) {
                    return {
                        border: '2px solid #efefef',
                        borderRadius: '2px'
                    }
                } else {
                    return {
                        border: '2px solid #fff',
                        borderRadius: '2px'
                    }
                }
            } break;

            case (FILTER_ACTIVE): {

                if (currentFilter.localeCompare(FILTER_ACTIVE) === 0) {
                    return {
                        border: '2px solid #efefef',
                        borderRadius: '2px'
                    }
                } else {
                    return {
                        border: '2px solid #fff',
                        borderRadius: '2px'
                    }
                }
            } break;

            case (FILTER_COMPLETED): {
                if (currentFilter.localeCompare(FILTER_COMPLETED) === 0) {
                    return {
                        border: '2px solid #efefef',
                        borderRadius: '2px'
                    }
                } else {
                    return {
                        border: '2px solid #fff',
                        borderRadius: '2px'
                    }
                }
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

    changeFilter(filterName) {
        this.props.onFilterTodos(filterName)
    }

    render() {
        return (
            <div className="todos-filters">
                <button className="todos-filter __all"
                        aria-label="show all items" style=
                            {this.setFocusOnCurrentFilter(
                                this.props.currentFilter, FILTER_ALL)}>
                    All
                </button>
                <button className="todos-filter __active"
                        aria-label="show undone items" style={
                            this.setFocusOnCurrentFilter(
                                this.props.currentFilter, FILTER_ACTIVE)}>
                    Active
                </button>
                <button className="todos-filter __completed"
                        aria-label="show done items" style=
                            {this.setFocusOnCurrentFilter(
                                this.props.currentFilter, FILTER_COMPLETED)}>
                    Completed
                </button>
            </div>
        )
    }

}

TodosFiltersUI.propTypes = {
    onFilterTodos: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired
};