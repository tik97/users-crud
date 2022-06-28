import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [reduxThunk];

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
