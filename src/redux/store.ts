import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import "./middleware/index";
import thunk from "redux-thunk";
import { middlewares } from "./middleware";

function configuredStore() {
  const middlewareEnhancer = applyMiddleware(thunk, ...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, undefined, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./redux", () => store.replaceReducer(rootReducer));
  }

  return store;
}

export const store = configuredStore();
