import BaseTodosReducer from './BaseTodosReducer'
import TodosPoolReducers from '../TodosPoolReducers'

import { MAKE_ALL_COMPLETED_TODOS } from '../../../../constants/ActionTypes'

export default class MakeAllCompletedTodosReducer extends BaseTodosReducer {
    getNewState(state, action) {
        if (action.type.localeCompare(MAKE_ALL_COMPLETED_TODOS) === 0) {
            return state.map(todosElement => {
                return {
                    id: todosElement.id,
                    text: todosElement.text,
                    completed: true
                }
            });
        } else {
            return state
        }
    }
}

TodosPoolReducers.registerReducer(new MakeAllCompletedTodosReducer());

