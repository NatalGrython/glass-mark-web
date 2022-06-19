import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer";
import { authWatcher } from "./auth/saga";
import { nodesReducer } from "./nodes/reducer";
import { nodeWatcher } from "./nodes/saga";
import { userReducer } from "./user/reducer";
import { userWatcher } from "./user/saga";
import { tableReducer } from "./table/reducer";
import { tableWatcher } from "./table/saga";
import { transactionWatcher } from "./transaction/saga";
import { transactionReducer } from "./transaction/reducer";

function* rootSaga() {
  yield all([
    authWatcher(),
    nodeWatcher(),
    userWatcher(),
    tableWatcher(),
    transactionWatcher(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    node: nodesReducer,
    user: userReducer,
    table: tableReducer,
    transaction: transactionReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
