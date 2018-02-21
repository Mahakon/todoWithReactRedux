import BaseTodosReducer from './BaseTodosReducer'
import TodosPoolReducers from '../TodosPoolReducers'
import {DELETE_TODOS} from '../../../../constants/ActionTypes'

export default class DeleteTodosReducer extends BaseTodosReducer {
    getNewState(state, action) {
        if (action.type.localeCompare(DELETE_TODOS) === 0) {
            return state.filter(todosElement => {
                if (todosElement.id != action.id) {
                    return true
                }

                return false
            });
        } else {
            return state
        }

    }
}

TodosPoolReducers.registerReducer(new DeleteTodosReducer());