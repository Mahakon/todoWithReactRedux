import { connect } from 'react-redux'

import TodosFiltersUI from '../../ui/todos-bar/TodosFiltersUI'

import setFilterTodosAction from
        '../../../modules/actions/setFilterTodosAction'

const mapStateToProps = state => ({
    currentFilter: state.currentFilter
});

const mapDispatchToProps = dispatch => ({
    onFilterTodos(filterName) {
        dispatch(setFilterTodosAction(filterName))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosFiltersUI)