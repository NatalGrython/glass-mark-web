import { call, put, select, takeEvery } from "redux-saga/effects";
import { createTransactionApi } from "../../api/transaction/create";
import { getTableAction } from "../table/actions";
import { userSelector } from "../user/selectors";
import {
  createTransactionSuccessAction,
  miningStartAction,
  miningStopAction,
} from "./action";
import { CREATE_TRANSACTION } from "./constants";

function* createTransaction(action: any) {
  try {
    const user: ReturnType<typeof userSelector> = yield select(userSelector);

    yield put(miningStartAction());

    yield call(createTransactionApi, {
      ...action.payload,
      receiver: Number(action.payload.receiver),
      sender: user?.id,
      nodeId: user?.node.id,
    });
    yield createTransactionSuccessAction();
    yield put(miningStopAction());
    yield put(getTableAction());
  } catch (error) {
    console.log(error);
    yield put(miningStopAction());
  }
}

export function* transactionWatcher() {
  yield takeEvery(CREATE_TRANSACTION, createTransaction);
}
