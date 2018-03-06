import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import storeFactory from './store/storeFactory'
import appReducer from './modules/reducers/appReducer'
import TodosContainer from './componets/TodosContainer'

const init = () => {
    function render() {
        ReactDOM.render(
            <Provider store={store}>
                <TodosContainer/>
            </Provider>,
            document.querySelector('.todos-container')
        )
    }

    const store = storeFactory({}, appReducer);

    store.subscribe(render);
    render();
};

document.addEventListener('DOMContentLoaded', init);
