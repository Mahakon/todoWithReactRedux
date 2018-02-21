import { DELETE_ALL_COMPLETED_TODOS } from '../../constants/ActionTypes'

const deleteAllCompletedTodosAction = () => {
    return {
        type: DELETE_ALL_COMPLETED_TODOS,
    }
};

export default deleteAllCompletedTodosAction