import expect from 'expect';
import deepFreeze from 'deep-freeze';

import setFilterTodosAction from
        '../../../modules/actions/setFilterTodosAction'
import toggleTodosAction from
        '../../../modules/actions/toggleTodosAction'
import makeAllCompletedTodosAction from
        '../../../modules/actions/makeAllCompletedTodosAction'
import deleteTodosAction from
        '../../../modules/actions/deteleTodosAction'
import deleteAllCompletedTodosAction from
        '../../../modules/actions/deleteAllCompletedTodosAction'
import addTodosAction from '../../../modules/actions/addTodosAction'
import ToggleTodosReducer
    from '../../../modules/reducers/todos-reducers/base-reducers/toggleTodosReducer'
import AddTodosReducer
    from '../../../modules/reducers/todos-reducers/base-reducers/addTodosReducer'
import DeleteAllCompletedTodosReducer
    from '../../../modules/reducers/todos-reducers/base-reducers/deleteAllCompletedTodosReducer'
import DeleteTodosReducer
    from '../../../modules/reducers/todos-reducers/base-reducers/deleteTodosReducer'
import MakeAllCompletedTodosReducer
    from '../../../modules/reducers/todos-reducers/base-reducers/makeAllCompletedTodosReducer'
import TodosPoolReducers from
        '../../../modules/reducers/todos-reducers/TodosPoolReducers'

import {ADD_TODOS, DELETE_ALL_COMPLETED_TODOS, SET_VISIBILITY_FILTER,
    DELETE_TODOS, TOGGLE_TODOS, MAKE_ALL_COMPLETED_TODOS} from
        '../../../constants/ActionTypes'


const testTodosReducer = (statesBefore, actions, statesAfter) => {
    for (let i = 0; i < statesBefore.length; i++) {
        deepFreeze(statesBefore[i]);
        deepFreeze(actions[i]);
        deepFreeze(statesAfter[i]);

        expect(
            TodosPoolReducers.getNewState(statesBefore[i], actions[i])
        ).toEqual(statesAfter[i]);
    }

};

describe('testTodosReducer', () => {

    it('test ADD_TODOS', () => {
        let statesBefore = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                },
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        let actions = [
            addTodosAction('hey', 12314),
            addTodosAction('what', 345),
            setFilterTodosAction("jhdf")
        ];

        let statesAfter = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                },
                {
                    id: 12314,
                    text: "hey",
                    completed: false
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 345,
                    text: "what",
                    completed: false
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        testTodosReducer(statesBefore, actions, statesAfter);
    });

    it('test TOGGLE_TODOS', () => {
        let statesBefore = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                },
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        let actions = [
            toggleTodosAction(3456),
            toggleTodosAction(3456),
            setFilterTodosAction("jhdf")
        ];

        let statesAfter = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        testTodosReducer(statesBefore, actions, statesAfter);
    });


    it('test DELETE_TODOS', () => {
        let statesBefore = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 345561,
                    text: "gdgfg",
                    completed: true
                },
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg1",
                    completed: false
                }
            ]
        ];

        let actions = [
            deleteTodosAction(345561),
            deleteTodosAction(3456),
            setFilterTodosAction("jhdf")
        ];

        let statesAfter = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ],
            [],
            [
                {
                    id: 3456,
                    text: "gdfg1",
                    completed: true
                }
            ]
        ];

        testTodosReducer(statesBefore, actions, statesAfter);
    });

    it('test MAKE_ALL_COMPLETED_TODOS', () => {
        let statesBefore = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                },
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        let actions = [
            makeAllCompletedTodosAction(),
            makeAllCompletedTodosAction(),
            setFilterTodosAction("jhdf")
        ];

        let statesAfter = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                },
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        testTodosReducer(statesBefore, actions, statesAfter);
    });

    it('test DELETE_ALL_COMPLETED_TODOS', () => {
        let statesBefore = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                },
                {
                    id: 34556,
                    text: "gdgfg",
                    completed: true
                },
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: true
                }
            ],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        let actions = [
            deleteAllCompletedTodosAction(),
            deleteAllCompletedTodosAction(),
            setFilterTodosAction("jhdf")
        ];

        let statesAfter = [
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ],
            [],
            [
                {
                    id: 3456,
                    text: "gdfg",
                    completed: false
                }
            ]
        ];

        testTodosReducer(statesBefore, actions, statesAfter);
    })

});
