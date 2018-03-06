import TodosPoolReducers from '../TodosPoolReducers'

import { TOGGLE_TODOS } from '../../../../constants/ActionTypes'

export default function toggleTodosReducer(state, action) {
    if (action.type === TOGGLE_TODOS) {
        return state.map(todosElement => {
            if (todosElement.id != action.id) {
                return todosElement;
            }

            return {
                id: todosElement.id,
                text: todosElement.text,
                completed: !todosElement.completed
            }
        });
    } else {
        return state
    }
}

TodosPoolReducers.registerReducer(toggleTodosReducer);
