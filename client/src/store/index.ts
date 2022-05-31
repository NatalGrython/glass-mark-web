import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { authWatcher } from "./auth/saga";
import { nodesReducer } from "./nodes/reducer";
import { nodeWatcher } from "./nodes/saga";

function* rootSaga() {
  yield all([authWatcher(), nodeWatcher()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    node: nodesReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
