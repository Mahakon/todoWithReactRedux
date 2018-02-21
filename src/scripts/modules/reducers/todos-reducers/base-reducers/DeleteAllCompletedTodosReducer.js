import BaseTodosReducer from './BaseTodosReducer'
import TodosPoolReducers from '../TodosPoolReducers'

import { DELETE_ALL_COMPLETED_TODOS } from '../../../../constants/ActionTypes'

export default class DeleteAllCompletedTodosReducer extends BaseTodosReducer {
    getNewState(state, action) {
        if (action.type.localeCompare(DELETE_ALL_COMPLETED_TODOS) === 0) {
            return state.filter(todosElement => {
                if (!todosElement.completed) {
                    return true
                }

                return false
            });
        } else {
            return state
        }

    }
}

TodosPoolReducers.registerReducer(new DeleteAllCompletedTodosReducer());