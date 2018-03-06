import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {FILTER_COMPLETED, FILTER_ACTIVE, FILTER_ALL} from
        '../../../constants/FilterTypes'


export default class TodosFiltersUI extends React.Component{
    constructor(props) {
        super(props);

        this.handlerClickAll = this.handlerClickAll.bind(this);
        this.handlerClickActive = this.handlerClickActive.bind(this);
        this.handlerClickComleted = this.handlerClickComleted.bind(this);
    }

    handlerClickAll() {
        this.props.onFilterTodos(FILTER_ALL)
    }

    handlerClickActive() {
        this.props.onFilterTodos(FILTER_ACTIVE)
    }

    handlerClickComleted() {
        this.props.onFilterTodos(FILTER_COMPLETED)
    }

    setClasses(curFilter) {
        const isChoosen = (curFilter === this.props.currentFilter);

        return classnames(
            "todos-filter",
            curFilter,
            {"__choosen": isChoosen},
            {"__unchoosen": !isChoosen}
        )
    }

    render() {
        return (
            <div className="todos-filters">
                <button className={this.setClasses(FILTER_ALL)}
                        aria-label="show all items"
                        onClick={this.handlerClickAll}>
                    All
                </button>
                <button className={this.setClasses(FILTER_ACTIVE)}
                        aria-label="show undone items"
                        onClick={this.handlerClickActive}>
                    Active
                </button>
                <button className={this.setClasses(FILTER_COMPLETED)}
                        aria-label="show done items"
                        onClick={this.handlerClickComleted}>
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
