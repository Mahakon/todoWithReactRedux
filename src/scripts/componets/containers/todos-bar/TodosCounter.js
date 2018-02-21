import { connect } from 'react-redux'

import TodosCounterUI from '../../ui/todos-bar/TodosCounterUI'

export default connect(
    state => ({
        todosArray: state.todosArray
    }),

    null
)(TodosCounterUI);