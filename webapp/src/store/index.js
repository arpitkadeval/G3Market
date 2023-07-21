import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
}


// import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

// export default function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)

//   return store
// }
