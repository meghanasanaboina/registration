import { createStore , applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
//import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'


//const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer,composeWithDevTools());{/*calculator*/}


export  {store};
