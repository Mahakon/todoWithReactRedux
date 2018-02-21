import BaseFiltersReducer from './BaseFilterReducer'
import FilterPoolReducers from '../FilterPoolReducers'

import { SET_VISIBILITY_FILTER } from '../../../../constants/ActionTypes'

export default class FilterReducer extends BaseFiltersReducer {
    getNewState(state, action) {
        if (action.type.localeCompare(SET_VISIBILITY_FILTER) === 0) {
            return action.filter;
        } else {
            return state
        }
    }
}

FilterPoolReducers.registerReducer(new FilterReducer());