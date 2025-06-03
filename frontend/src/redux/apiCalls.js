import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log("res.data:", res.data);
  } catch (err) {
    console.log("err:", err);
    alert(err.response.data.error || err.response.data);
    dispatch(loginFailure());
  }
};
