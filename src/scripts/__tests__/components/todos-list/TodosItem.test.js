import { shallow } from 'enzyme'
import TodosItemUI from '../../../componets/ui/todos-list/TodosItemUI'
import { FILTER_ALL } from '../../../constants/FilterTypes'

describe("<TodosItemUI/> UI Component", () => {
    let todosElement;
    beforeAll(() => {
        todosElement = {
            id: 42525,
            text: "maha",
            completed: false
        }
    });
    it('should be', () => {
        expect(
            shallow(
                <TodosItemUI
                    key={todosElement.id}
                    completed={todosElement.completed}
                    currentFilter=
                        {FILTER_ALL}
                    value={todosElement.text}
                    id={todosElement.id}
                />)
                .find('div.todos-item')
                .length
        ).toBe(1)
    })
});