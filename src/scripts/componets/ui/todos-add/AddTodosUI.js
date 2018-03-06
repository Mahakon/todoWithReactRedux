import React from 'react'
import PropTypes from 'prop-types'

const ENTER_KEY_CODE = 13;

export default class AddTodosUI extends React.Component {
    constructor(props) {
        super(props);
        this.handlerKeyPress = this.handlerKeyPress.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerKeyPress(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.props.onAddTodos(event.target.value);
            event.target.value = '';
        }
    }

    handlerClick() {
        this.props.onMakeAllCompletedTodos();
    }

    setVisibilityToSelectAllButton() {
        if (this.props.numTodosItems === 0) {
            return "hidden"
        }

        return "visible"
    }

    render() {
        return (
            <div className="todos-add">

                <button className="todos-add_select-all"
                        style={
                            {visibility: this.setVisibilityToSelectAllButton()}
                        }
                        onClick={this.handlerClick}
                        aria-label="select all like done">
                    <div className="todos-add_select-all_icon"></div>
                </button>

                <div className="todos-add_new-item-w">
                    <input className="todos-add_new-item"
                           onKeyUp={this.handlerKeyPress}
                           placeholder="What needs to be done?"
                           aria-label="add new item"/>
                </div>

            </div>
        )
    }

}

AddTodosUI.propTypes = {
    onAddTodos: PropTypes.func.isRequired,
    numTodosItems: PropTypes.number.isRequired
};
