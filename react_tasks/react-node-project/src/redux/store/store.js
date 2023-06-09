import {createStore,applyMiddleware} from "redux"
import apiReducer from "../reducer/apiReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

const store=createStore(apiReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
