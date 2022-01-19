import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk, { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import reducers from "./rootReducer";

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  compose(applyMiddleware(Thunk), composeWithDevTools())
);
export default store;

export type AppDispatch =
  | any
  | typeof store.dispatch
  | ThunkAction<Promise<void>, {}, {}, AnyAction>;
