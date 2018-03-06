import { TOGGLE_TODOS } from '../../constants/ActionTypes'

const toggleTodosAction = (id) => {
    return {
        type: TOGGLE_TODOS,
        id: id
    }
};

export default toggleTodosAction