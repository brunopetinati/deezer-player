import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import * as yup from "yup";

import userThunk from "../../store/modules/users/thunk"

// ACTIONS
//import { addData } from "../../store/Modules/Data/actions";

//STYLES
import { DefaultForm, StyledButton , StyledInput} from "../../styles/index"

//COMPONENTS
import ButtonSnackbar from "../snack-bar/index";

const RegisterForm = () => {
  const [open] = useState(false);


  //const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "This field should have only letters")
      .required("This field is required"),
    email: yup.string().email("Please type a valid email format").required("This field is required"),

    password: yup
      .string()
      .min(4, "Minimum of 4 digits required")
      .required("This field is required"),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "The passwords differ"),
  });


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

/*   const updateData = () => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));
  }; */

  const history = useHistory();

  const dispatch = useDispatch();

  const handleForm = (data) => {
    console.log(data);
    dispatch(userThunk(data, history));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <DefaultForm onSubmit={handleSubmit(handleForm)}>
       
          <StyledInput
            label="Name"
            name="name"
            autoComplete="off"
            placeholder="Username"
            {...register("name", {
              required: "Required",
            })}
          />
        <div>{errors.name?.message}</div>
          <StyledInput
            label="Email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            {...register("email", {
              required: "Required",
            })}
          />
        <div>{errors.email?.message}</div>
          <StyledInput
            label="Password"
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Password"
            {...register("password", {
              required: "Required",
            })}
          />
        <div>{errors.password?.message}</div>
          <StyledInput
            label="Password confirmation"
            name="password_confirmation"
            type="password"
            autoComplete="off"
            placeholder="Password Confirmation"
            {...register("password_confirmation", {
              required: "Required",
            })}
          />
        <div>{errors.passwordConfirm?.message}</div>
      <br/>
      <StyledButton type="submit">Register</StyledButton>
       
      </DefaultForm>
      <ButtonSnackbar open={open}/>
    </motion.div>
  );
};

export default RegisterForm;