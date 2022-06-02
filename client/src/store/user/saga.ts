import { call, put, SagaReturnType, takeEvery } from "redux-saga/effects";
import { getUserApi } from "../../api/user/get";
import { getAllUserApi } from "../../api/user/getAll";
import { getTableAction } from "../table/actions";
import {
  getAllUsersAction,
  getAllUsersSuccessAction,
  getUserAction,
  getUserSuccessAction,
} from "./action";
import { GET_ALL_USER, GET_USER } from "./constants";

function* getUser(action: ReturnType<typeof getUserAction>) {
  try {
    const user: SagaReturnType<typeof getUserApi> = yield call(
      getUserApi,
      action.payload
    );
    yield put(getUserSuccessAction(user));
    //@ts-ignore
    yield put(getTableAction(user.node.id));
    if (user.role === "teacher") {
      yield put(getAllUsersAction());
    }
  } catch (error) {
    console.log(error);
  }
}

function* getAllUsers() {
  try {
    //@ts-ignore
    const users = yield call(getAllUserApi);
    yield put(getAllUsersSuccessAction(users));
  } catch (error) {
    console.log(error);
  }
}

export function* userWatcher() {
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(GET_ALL_USER, getAllUsers);
}
