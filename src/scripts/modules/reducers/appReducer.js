import { combineReducers } from 'redux'

import TodosPoolReducers from './todos-reducers/TodosPoolReducers'
import AddTodosReducer from './todos-reducers/base-reducers/AddTodosReducer'
import ToggleTodosReducer from './todos-reducers/base-reducers/ToggleTodosReducer'
import MakeAllCompletedTodosReducer from './todos-reducers/base-reducers/MakeAllCompletedTodosReducer'
import DeleteTodosReducer from './todos-reducers/base-reducers/DeleteTodosReducer'
import DeleteAllCompletedTodosReducer from './todos-reducers/base-reducers/DeleteAllCompletedTodosReducer'

import FilterPoolReducer from './filter-reducers/FilterPoolReducers'
import Filterreducer from './filter-reducers/base-reducers/FilterReducer'

export default combineReducers({
    todosArray: TodosPoolReducers.getNewState,
    currentFilter: FilterPoolReducer.getNewState
})