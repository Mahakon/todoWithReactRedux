export default class BaseTodosReducer {
    getNewState(state, action) {
        throw new Error("must be override")
    }
}