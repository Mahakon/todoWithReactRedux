import {shallow} from 'enzyme'
import AddTodos from '../../../componets/containers/todos-add/AddTodos'
import storeFactory from '../../../store/storeFactory'
import appReducer from '../../../modules/reducers/appReducer'

describe("<AddTodos/> UI Component", () => {
    let store;
    beforeAll(() => {
        store = storeFactory(testStates[0], appReducer)

    });
    it('should be', () => {
        expect(
            shallow(
                    <AddTodos store={store}/>
            )
                .html()

        ).toEqual('<div class=\"todos-add\">' +
            '<button class=\"todos-add_select-all\" ' +
            'style=\"visibility:visible\" aria-label=\"select all like done\">' +
            '<div class=\"todos-add_select-all_icon\">' +
            '</div>' +
            '</button>' +
            '<div class=\"todos-add_new-item-w\">' +
            '<input class=\"todos-add_new-item\" ' +
            'placeholder=\"What needs to be done?\" ' +
            'aria-label=\"add new item\"/></div></div>')
    })
});