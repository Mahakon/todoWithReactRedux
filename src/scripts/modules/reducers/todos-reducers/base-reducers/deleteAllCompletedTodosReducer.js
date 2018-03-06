import TodosPoolReducers from '../TodosPoolReducers'

import { DELETE_ALL_COMPLETED_TODOS } from '../../../../constants/ActionTypes'

export default function deleteAllCompletedTodosReducer(state, action) {
    if (action.type === DELETE_ALL_COMPLETED_TODOS) {
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

TodosPoolReducers.registerReducer(deleteAllCompletedTodosReducer);
