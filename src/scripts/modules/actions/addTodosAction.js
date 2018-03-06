import { ADD_TODOS } from '../../constants/ActionTypes';

const addTodosAction = (text, id) => {
    return {
        type: ADD_TODOS,
        id: id,
        text: text
    }
};

export default addTodosAction