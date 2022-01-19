import { applyMiddleware, createStore } from "redux";
import Thunk, { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import reducers from "./rootReducer";

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  applyMiddleware(Thunk)
);
export default store;

export type AppDispatch =
  | any
  | typeof store.dispatch
  | ThunkAction<Promise<void>, {}, {}, AnyAction>;
