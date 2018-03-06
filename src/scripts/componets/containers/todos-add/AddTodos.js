import { connect } from 'react-redux'

import AddTodosUI from '../../ui/todos-add/AddTodosUI'

import addTodosAction from '../../../modules/actions/addTodosAction'
import makeAllCompletedTodosAction from
        '../../../modules/actions/makeAllCompletedTodosAction'


const mapStateToProps = state => ({
    numTodosItems: state.todosArray.length
});

const mapDispatchToProps = dispatch => ({
    onAddTodos(text) {
        dispatch(addTodosAction(
            text,
            new Date().getTime()
        ))
    },
    onMakeAllCompletedTodos() {
        dispatch(makeAllCompletedTodosAction())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodosUI)