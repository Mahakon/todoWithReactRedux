import TodosPoolReducers from '../TodosPoolReducers'

import { ADD_TODOS } from '../../../../constants/ActionTypes'

export default function addTodosReducer(state, action) {
    if (action.type === ADD_TODOS) {
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

TodosPoolReducers.registerReducer(addTodosReducer);
