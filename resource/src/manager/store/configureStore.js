import {applyMiddleware,compose,createStore} from 'redux'
// import { konseptReducer } from '../reducer/konseptReducer';
import thunk from 'redux-thunk';
import { konseptReducer } from "../reducer/konseptReducer";


// const configureStore = ()=>{
//     const store = createStore(konseptReducer,compose(applyMiddleware(thunk)));
//     return store;
// }
// export default configureStore;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = ()=>{
    const store = createStore(
        
        konseptReducer,
        composeEnhancers(applyMiddleware(thunk)));
    return store;

}
export default configureStore;