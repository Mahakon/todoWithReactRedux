import BaseTodosReducer from './BaseTodosReducer'
import TodosPoolReducers from '../TodosPoolReducers'

import { ADD_TODOS } from '../../../../constants/ActionTypes'

export class AddTodosReducer extends BaseTodosReducer {
    getNewState(state, action) {
        if (action.type.localeCompare(ADD_TODOS) === 0) {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        } else {
            return state
        }
    }
}

TodosPoolReducers.registerReducer(new AddTodosReducer());