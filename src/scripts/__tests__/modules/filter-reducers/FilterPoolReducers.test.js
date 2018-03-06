import expect from 'expect'
import deepFreeze from 'deep-freeze'

import FilterReducer from
        '../../../modules/reducers/filter-reducers/base-reducers/filterReducer'
import FilterPoolReducers from
        '../../../modules/reducers/filter-reducers/FilterPoolReducers'
import setFilterTodosAction from
        '../../../modules/actions/setFilterTodosAction'

import {FILTER_COMPLETED, FILTER_ACTIVE, FILTER_ALL} from
        '../../../constants/FilterTypes'

const testFilterReducer = (reducer) => {
    let statesBefore = [
        FILTER_ACTIVE,
        FILTER_COMPLETED,
        FILTER_ALL
    ];

    let actions = [
        setFilterTodosAction(FILTER_COMPLETED),
        setFilterTodosAction(FILTER_ALL),
        setFilterTodosAction(FILTER_ACTIVE),

    ];

    let statesAfter = [
        FILTER_COMPLETED,
        FILTER_ALL,
        FILTER_ACTIVE
    ];

    for (let i = 0; i < statesBefore.length; i++) {
        deepFreeze(actions[i]);

        expect(
            reducer.getNewState(statesBefore[i], actions[i])
        ).toEqual(statesAfter[i]);
    }
};

describe('testFilterReducer', () => {

    it('should be new state', () => {
        testFilterReducer(FilterPoolReducers)
    });

    it('jfhsdj', () => {

    })

});
