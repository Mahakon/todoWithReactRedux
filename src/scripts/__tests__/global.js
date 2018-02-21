import React from 'react'
import deepFreeze from 'deep-freeze'
import expect from 'expect'

import { FILTER_COMPLETED, FILTER_ALL, FILTER_ACTIVE } from
        '../constants/FilterTypes'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

global.React = React;
global.expect = expect;

global.testStates = deepFreeze([
    {
        todosArray: [
            {
                id: 375987352,
                text: "maha1",
                completed: true
            },
            {
                id: 3759873552,
                text: "maha2",
                completed: false
            },
            {
                id: 37598735452,
                text: "maha3",
                completed: true
            },
        ],
        currentFilter: FILTER_COMPLETED
    },
    {
        todosArray: [
            {
                id: 375987352,
                text: "maha1",
                completed: false
            },
            {
                id: 3759873552,
                text: "maha2",
                completed: false
            }
        ],
        currentFilter: FILTER_ACTIVE
    },
    {
        todosArray: [
            {
                id: 375987352,
                text: "maha1",
                completed: true
            }
        ],
        currentFilter: FILTER_ALL
    },
    {}
]);
