import { combineReducers } from 'redux'

import TodosPoolReducers from './todos-reducers/TodosPoolReducers'
import addTodosReducer from './todos-reducers/base-reducers/addTodosReducer'
import toggleTodosReducer from './todos-reducers/base-reducers/toggleTodosReducer'
import makeAllCompletedTodosReducer from './todos-reducers/base-reducers/makeAllCompletedTodosReducer'
import deleteTodosReducer from './todos-reducers/base-reducers/deleteTodosReducer'
import deleteAllCompletedTodosReducer from './todos-reducers/base-reducers/deleteAllCompletedTodosReducer'

import FilterPoolReducer from './filter-reducers/FilterPoolReducers'
import filterReducer from './filter-reducers/base-reducers/filterReducer'

export default combineReducers({
    todosArray: TodosPoolReducers.getNewState,
    currentFilter: FilterPoolReducer.getNewState
})
