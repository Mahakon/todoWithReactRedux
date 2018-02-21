export default class BaseFilterReducer {
    getNewState(state, action) {
        throw new Error("must be override")
    }
}