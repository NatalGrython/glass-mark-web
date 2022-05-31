import { useEffect, useRef } from "react";
import { batch, useDispatch } from "react-redux";
import { checkAuthorizationAction } from "../store/auth/actions";
import { getNodesAction } from "../store/nodes/actions";

export const onInit = () => {
  const dispatch = useDispatch();
  const isInit = useRef(false);
  useEffect(() => {
    if (isInit.current) {
      batch(() => {
        dispatch(checkAuthorizationAction());
        dispatch(getNodesAction());
      });
    }
    isInit.current = true;
  }, []);
};
