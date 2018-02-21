import { MAKE_ALL_COMPLETED_TODOS } from '../../constants/ActionTypes'

const makeAllCompletedTodosAction = () => {
    return {
        type: MAKE_ALL_COMPLETED_TODOS,
    }
};

export default makeAllCompletedTodosAction