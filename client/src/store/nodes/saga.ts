import { call, takeLatest, put, SagaReturnType } from "redux-saga/effects";
import { getAllNodesApi } from "../../api/nodes/getAll";
import { getNodesSuccessAction } from "./actions";
import { GET_NODES } from "./constants";

function* getNodes() {
  try {
    const nodes: SagaReturnType<typeof getAllNodesApi> = yield call(
      getAllNodesApi
    );
    yield put(getNodesSuccessAction(nodes));
  } catch (error) {
    console.log(error);
  }
}

export function* nodeWatcher() {
  yield takeLatest(GET_NODES, getNodes);
}
