import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";

import reducers from "./rootReducer";

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  compose(applyMiddleware(Thunk), composeWithDevTools())
);
export default store;
