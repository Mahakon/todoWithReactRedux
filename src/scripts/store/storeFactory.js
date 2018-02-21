import { createStore, applyMiddleware } from 'redux'

const logger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initialState = stateData, appReducer) =>
    applyMiddleware(logger, saver)(createStore)(
        appReducer,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState/*?*/
    );

export default storeFactory;

