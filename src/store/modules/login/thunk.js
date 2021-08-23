import api from "../../../services/api";
import { userLogin } from "./actions";
import Swal from "sweetalert2";

const loginThunk = (result, history) => (dispatch) => {
  api
    .post("/login", result)
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("authToken", res.data.accessToken);
      dispatch(userLogin(res.data.accessToken));
      history.push("/locked");
      window.location.reload();
    })
    .catch(() =>
      Swal.fire({
        title: "Oops!",
        text: "A simple error ocurred. Please verify information and try again",
        icon: "error",
        confirmButtonText: "Got it!",
      })
    );
};

export default loginThunk;