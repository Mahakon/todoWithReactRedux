import { SET_VISIBILITY_FILTER } from '../../constants/ActionTypes'

const setFilterTodosAction = (filterName) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filterName
    }
};

export default setFilterTodosAction;