import BaseTodosReducer from './BaseTodosReducer'
import TodosPoolReducers from '../TodosPoolReducers'

import { TOGGLE_TODOS } from '../../../../constants/ActionTypes'

export default class ToggleTodosReducer extends BaseTodosReducer {
    getNewState(state, action) {
        if (action.type.localeCompare(TOGGLE_TODOS) === 0) {
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
}

TodosPoolReducers.registerReducer(new ToggleTodosReducer());