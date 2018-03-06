import { DELETE_TODOS } from '../../constants/ActionTypes';

const deleteTodosAction = (id) => {
    return {
        type: DELETE_TODOS,
        id: id
    }
};

export default deleteTodosAction