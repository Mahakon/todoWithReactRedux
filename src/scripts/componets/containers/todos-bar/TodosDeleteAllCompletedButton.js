import { connect } from 'react-redux'

import TodosDeleteAllCompletedButtonUI from
        '../../ui/todos-bar/TodosDeleteAllCompletedButtonUI'

import deleteAllCompletedTodosAction from
        '../../../modules/actions/deleteAllCompletedTodosAction'

export default connect(
    null,
    dispatch => ({
        onDeleteAllCompletedTodos() {
            dispatch(deleteAllCompletedTodosAction())
        }
    })
)(TodosDeleteAllCompletedButtonUI)