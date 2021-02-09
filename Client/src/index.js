import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import {allReducers} from './Reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

//local
import App from './App';

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);