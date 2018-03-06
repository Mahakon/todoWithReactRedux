import TodosPoolReducers from '../TodosPoolReducers'

import { MAKE_ALL_COMPLETED_TODOS } from '../../../../constants/ActionTypes'

export default function makeAllCompletedTodosReducer(state, action) {
    if (action.type === MAKE_ALL_COMPLETED_TODOS) {
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

TodosPoolReducers.registerReducer(makeAllCompletedTodosReducer);

