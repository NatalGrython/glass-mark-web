import jwtDecode from "jwt-decode";
import { call, takeLatest, put, SagaReturnType } from "redux-saga/effects";
import { loginApi } from "../../api/auth/login";
import { registrationApi } from "../../api/auth/registration";
import { Token } from "../../types/shared/common";
import { deleteNodes } from "../nodes/actions";
import { deleteTableAction, getTableAction } from "../table/actions";
import {
  deleteUserAction,
  deleteUsersAction,
  getUserAction,
} from "../user/action";
import {
  loginAction,
  authorizationSuccessAction,
  registrationAction,
} from "./actions";
import { CHECK_AUTHORIZATION, LOGIN, LOGOUT, REGISTRATION } from "./constants";

function* authorizationSuccess(token: string) {
  localStorage.setItem("token", token);
  const decodedToken = jwtDecode<Token>(token);
  yield put(authorizationSuccessAction({ token, role: decodedToken.role }));
  yield put(getUserAction(decodedToken.id));
}

function* login(action: ReturnType<typeof loginAction>) {
  try {
    const { token }: SagaReturnType<typeof loginApi> = yield call(
      loginApi,
      action.payload
    );
    yield* authorizationSuccess(token);
  } catch (error) {
    console.log(error);
  }
}

function* registration(action: ReturnType<typeof registrationAction>) {
  try {
    const { token }: SagaReturnType<typeof registrationApi> = yield call(
      registrationApi,
      action.payload
    );
    yield* authorizationSuccess(token);
  } catch (error) {
    console.log(error);
  }
}

function* checkAuthorization() {
  const token = localStorage.getItem("token");
  if (token) {
    yield* authorizationSuccess(token);
  }
}

function* logout() {
  localStorage.removeItem("token");
  yield put(deleteUserAction());
  yield put(deleteTableAction());
  yield put(deleteUsersAction());
}

export function* authWatcher() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTRATION, registration);
  yield takeLatest(CHECK_AUTHORIZATION, checkAuthorization);
  yield takeLatest(LOGOUT, logout);
}
