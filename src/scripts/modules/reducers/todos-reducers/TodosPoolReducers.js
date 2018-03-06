class TodosPoolReducers {
    constructor() {
        this.reducers = [];

        this.getNewState = this.getNewState.bind(this);
        this.registerReducer = this.registerReducer.bind(this);
    }

    registerReducer(reducer) {
        this.reducers.push(reducer)
    }

    getNewState(state = [], action) {
        return this.reducers.reduce((state, reducer) => {
            return reducer(state, action)
        }, state)
    }
}

export default new TodosPoolReducers()
