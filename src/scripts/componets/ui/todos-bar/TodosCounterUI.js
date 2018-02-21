import React from 'react'
import PropTypes from 'prop-types'

export default class TodosCounterUI extends React.Component {
    constructor(props) {
        super(props);
        this.getNumOfActiveItems = this.getNumOfActiveItems.bind(this);
    }

    getNumOfActiveItems() {
        let num = 0;

        for (let i = 0; i < this.props.todosArray.length; i++) {
            if (!this.props.todosArray[i].completed) {
                num++;
            }
        }

        return num + " items left";
    }

    render() {
        return (
            <div className="todos-actions-bar_counter-undone"
                 aria-label="number of undone items">
                {this.getNumOfActiveItems()}
            </div>
        )
    }

}

TodosCounterUI.propTypes = {
    todosArray: PropTypes.array.isRequired
};