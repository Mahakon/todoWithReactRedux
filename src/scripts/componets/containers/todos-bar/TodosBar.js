import { connect } from 'react-redux'

import TodosBarUI from '../../ui/todos-bar/TodosBarUI'

export default connect(
    state => ({
        numTodosItems: state.todosArray.length,
    }),
    null
)(TodosBarUI)