class FilterPoolReducers {
    constructor() {
        this.reducers = [];

        this.getNewState = this.getNewState.bind(this);
        this.registerReducer = this.registerReducer.bind(this);
    }

    registerReducer(reducer) {
        this.reducers.push(reducer)
    }

    getNewState(state = 'todos-filter __all', action) {
        return this.reducers.reduce((state, reducer) => {
            return reducer.getNewState(state, action)
        }, state)
    }
}

export default new FilterPoolReducers()