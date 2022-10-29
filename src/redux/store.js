import {legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReduser } from "./rootReducer";
import createSagaMiddleWare from 'redux-saga';
import mySagas from "../http/userService";

const initialState = {};
const enhancers = [];

const sagaMiddleware = createSagaMiddleWare();
const middleware = [sagaMiddleware];

const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(rootReduser, initialState, composeEnhancers);
sagaMiddleware.run(mySagas);
export default store;