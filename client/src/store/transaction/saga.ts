import { call, put, select, takeEvery } from "redux-saga/effects";
import { createTransactionApi } from "../../api/transaction/create";
import { getTableAction } from "../table/actions";
import { userSelector } from "../user/selectors";
import { createTransactionSuccessAction } from "./action";
import { CREATE_TRANSACTION } from "./constants";

function* createTransaction(action: any) {
  try {
    const user: ReturnType<typeof userSelector> = yield select(userSelector);
    yield call(createTransactionApi, {
      ...action.payload,
      receiver: Number(action.payload.receiver),
      sender: user?.id,
      nodeId: user?.node.id,
    });
    yield createTransactionSuccessAction();
    yield put(getTableAction());
  } catch (error) {
    console.log(error);
  }
}

export function* transactionWatcher() {
  yield takeEvery(CREATE_TRANSACTION, createTransaction);
}
