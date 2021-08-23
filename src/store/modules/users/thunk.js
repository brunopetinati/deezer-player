import api from "../../../services/api";
import { userRegister } from "./actions";
import Swal from "sweetalert2";

const usersThunk = (result, history) => async (dispatch) => {
  await api
    .post("/users", result)
    .then((res) => {
      dispatch(userRegister(res));
      history.push("/login");
    })
    .catch((err) =>
      Swal.fire({
        title: "Oops!",
        text: "A simple error ocurred. Please verify information and try again",
        icon: "error",
        confirmButtonText: "Got it!",
      })
    );
};

export default usersThunk;