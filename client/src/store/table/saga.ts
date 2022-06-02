import { call, put, takeEvery } from "redux-saga/effects";
import { getFullTableApi } from "../../api/table/getFull";
import { getTableSuccessAction } from "./actions";
import { GET_TABLE } from "./constants";

function* getTable(action: any) {
  try {
    //@ts-ignore
    const table = yield call(getFullTableApi, action.payload);
    //@ts-ignore
    yield put(getTableSuccessAction(table));
  } catch (error) {
    console.log(error);
  }
}

export function* tableWatcher() {
  yield takeEvery(GET_TABLE, getTable);
}
