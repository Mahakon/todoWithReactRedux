import { mount, shallow } from 'enzyme'
import { compose } from 'redux'
import toJson from 'enzyme-to-json'
import TodosCounterUI from '../../../componets/ui/todos-bar/TodosCounterUI'
import storeFactory from '../../../store/storeFactory'
import appReducer from '../../../modules/reducers/appReducer'
import { Provider } from 'react-redux'

describe('<TodosCounter/> snap-shot test', () => {
   const shallowExpect = compose(expect, toJson, shallow);
    let store;
    let wrapper;
    beforeAll(() => {
        //TODO: just change 1 to 0
        store = storeFactory(testStates[1], appReducer)
    });

   it ('Renders correct props', () => {
        shallowExpect(
            <TodosCounterUI todosArray={store.getState().todosArray}/>
        ).toMatchSnapshot()
   })
});