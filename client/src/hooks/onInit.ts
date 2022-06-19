import { useEffect, useRef } from "react";
import { batch, useDispatch } from "react-redux";
import { checkAuthorizationAction } from "../store/auth/actions";
import { getNodesAction } from "../store/nodes/actions";

export const onInit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    batch(() => {
      dispatch(checkAuthorizationAction());
      dispatch(getNodesAction());
    });
  }, []);
};
