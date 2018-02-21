import { connect } from 'react-redux'

import TodosListUI from '../../ui/todos-list/TodosListUI'

import toggleTodosAction from '../../../modules/actions/toggleTodosAction'
import deleteTodosAction from '../../../modules/actions/deteleTodosAction'

const mapStateToProps = state => ({
    todosArray: state.todosArray,
    currentFilter: state.currentFilter
});

const mapDispatchToProps = dispatch => ({
    onDeleteTodos(id) {
        dispatch(deleteTodosAction(id))
    },
    onToggleTodos(id) {
        dispatch(toggleTodosAction(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosListUI)