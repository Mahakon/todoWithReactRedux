import TodosPoolReducers from '../TodosPoolReducers'

import {DELETE_TODOS} from '../../../../constants/ActionTypes'

export default function deleteTodosReducer(state, action) {
    if (action.type === DELETE_TODOS) {
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

TodosPoolReducers.registerReducer(deleteTodosReducer);
