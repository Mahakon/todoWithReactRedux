import React from 'react'

import AddTodos from './containers/todos-add/AddTodos'
import TodosList from './containers/todos-list/TodosList'
import TodosBar from './containers/todos-bar/TodosBar'

export default class TodosContainer extends React.Component {
    render() {
        return (
            <div>
                <AddTodos/>
                <TodosList/>
                <TodosBar/>
            </div>
        )
    }
}