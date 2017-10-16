import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers'

const  middleware = applyMiddleware(promise(), thunk);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,middleware,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}

