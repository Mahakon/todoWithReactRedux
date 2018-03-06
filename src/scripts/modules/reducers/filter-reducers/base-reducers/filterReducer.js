import FilterPoolReducers from '../FilterPoolReducers'

import { SET_VISIBILITY_FILTER } from '../../../../constants/ActionTypes'

export default function filterReducer(state, action) {
    if (action.type === SET_VISIBILITY_FILTER) {
        return action.filter;
    } else {
        return state
    }
}

FilterPoolReducers.registerReducer(filterReducer);
