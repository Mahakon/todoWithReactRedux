import expect from 'expect'
import storeFactory from '../../store/storeFactory'
import appReducer from '../../modules/reducers/appReducer'

import addTodosAction from '../../modules/actions/addTodosAction'
import { FILTER_ALL } from '../../constants/FilterTypes'

for (let i = 0; i < testStates.length; i++) {
    describe('add Todos', () => {
        let store;
        let lastTodos;
        let len;
        let id;
        let filter;

        beforeAll(() => {
            localStorage.clear();

            store = storeFactory(testStates[i], appReducer);


            len = (testStates[i].todosArray !== undefined) ?
                testStates[i].todosArray.length: 0;
            id = new Date().getTime();
            filter = (testStates[i].currentFilter !== undefined) ?
                testStates[i].currentFilter : FILTER_ALL;

            store.dispatch(addTodosAction(
                "new Todos",
                id));

            lastTodos = {
                id: id,
                text: "new Todos",
                completed: false
            }
        });

        it('should add new Todos', () => {
            expect(store.getState().todosArray.length).toBe(len + 1)
        });

        it('should add new Todos in the end', () => {
            expect(store.getState().todosArray[len]).toEqual(lastTodos)
        });

        it('should not change filter', () => {
            expect(store.getState().currentFilter).toEqual(filter)
        });

    });
}